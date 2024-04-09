import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { base_url, fetchMovieCredits, fetchMovieDetail, fetchSimilarMovie, image500 } from '../api';
import Cast from '../components/cast';
import Loader from '../components/loader';
import UpcomingMovie from '../components/upcoming';
import { api_key } from '../constants';

const { width, height } = Dimensions.get('window');

export default function Movie() {
	const [isFavourite, setIsFavourite] = useState(false);
	const [movie, setMovie] = useState({});
	const [cast, setCast] = useState([]);
	const [similarMovie, setSimilarMovie] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [videoUrl, setVideoUrl] = useState(null); // Video URL'ni saqlash uchun useState

	const navigation = useNavigation();
	const { params: id } = useRoute();

	useEffect(() => {
		getMovieDetail();
		getMovieCredits();
		getSimilarMovie();
		fetchVideo(); // Videoni yuklash uchun fetchVideo funksiyasini chaqiramiz
	}, [id]);

	const getMovieDetail = async () => {
		const data = await fetchMovieDetail(id);
		setMovie(data);
		setIsLoading(false);
	};

	const getMovieCredits = async () => {
		const data = await fetchMovieCredits(id);
		setCast(data.cast);
	};

	const getSimilarMovie = async () => {
		const data = await fetchSimilarMovie(id);
		setSimilarMovie(data.results);
	};

	const fetchVideo = async () => {
		try {
			const api = `${base_url}/${
				movie?.media_type === 'tv' ? 'tv' : 'movie'
			}/${id}/videos?api_key=${api_key}&language=en-US`;
			const response = await fetch(api); // API dan ma'lumotni olish
			const data = await response.json(); // JSON formatiga o'girish
			// Avvalgi shu yerda video ma'lumotlari borligini tekshiramiz
			if (data.results && data.results.length > 0) {
				// Agar ma'lumotlar bo'lsa, eng birinchisini olib video URL ni saqlaymiz
				setVideoUrl(`https://www.youtube.com/watch?v=${data.results[0].key}`);
			}
		} catch (error) {
			console.error('Video yuklashda xatolik:', error);
		}
	};

	const handleToggleFavorite = () => {
		setIsFavourite(prev => !prev);
	};

	return (
		<ScrollView contentContainerStyle={{ paddingBottom: 20 }} className={'flex-1 bg-slate-900'}>
			<View className={'w-full'}>
				<SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4'}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<ChevronLeftIcon color={'#fff'} strokeWidth={2.5} size={30} />
					</TouchableOpacity>

					<TouchableOpacity onPress={handleToggleFavorite}>
						<HeartIcon color={isFavourite ? 'red' : 'white'} strokeWidth={2.5} size={35} />
					</TouchableOpacity>
				</SafeAreaView>
				{isLoading ? (
					<Loader />
				) : (
					<View>
						<Image
							source={{ uri: image500(movie.poster_path) }}
							style={{ width, height: height * 0.5 }}
						/>
						<LinearGradient
							colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
							style={{ width, height: height * 0.4 }}
							start={{ x: 0.5, y: 0 }}
							end={{ x: 0.5, y: 1 }}
							className={'absolute bottom-0'}
						/>
					</View>
				)}
			</View>

			<View className={'space-y-4'} style={{ marginTop: -40 }}>
				<Text className={'text-white text-center text-3xl font-bold tracking-widest'}>
					{movie?.title}
				</Text>
				{movie?.id ? (
					<Text className={'text-neutral-400 font-semibold text-base text-center'}>
						{movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min
					</Text>
				) : null}

				<View className={'flex-row justify-center mx-4 space-x-2'}>
					{movie?.genres?.map((genre, idx) => (
						<Text key={idx} className={'text-neutral-400 font-semibold text-base text-center'}>
							{genre?.name} {idx + 1 !== movie.genres.length ? '•' : null}
						</Text>
					))}
				</View>

				<Text className={'text-neutral-400 mx-4 tracking-wide'}>{movie?.overview}</Text>
			</View>

			{/* Videoni ko'rish uchun TouchableOpacity qo'shamiz */}
			{videoUrl && (
				<TouchableOpacity onPress={() => Linking.openURL(videoUrl)}>
					<Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Watch Video</Text>
				</TouchableOpacity>
			)}

			{movie?.id && cast.length > 0 && <Cast cast={cast} />}

			{movie?.id && similarMovie.length > 0 && (
				<UpcomingMovie upcoming={similarMovie} title={'Similar movies'} />
			)}
		</ScrollView>
	);
}
