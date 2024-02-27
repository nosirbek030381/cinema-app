import React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './movie-card';

const { width, height } = Dimensions.get('window');

export default function TrendingMovie({ trending }) {
	return (
		<View className={'mb-5 mt-5'}>
			<Carousel
				data={trending}
				renderItem={({ item }) => <MovieCard item={item} />}
				firstItem={1}
				sliderWidth={width}
				itemWidth={width * 0.7}
				inactiveSlideOpacity={0.6}
				slideStyle={{ display: 'flex', justifyContent: 'center' }}
			/>
		</View>
	);
}
