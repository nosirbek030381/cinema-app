import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { image185 } from '../api';

const { width, height } = Dimensions.get('window');

export default function UpcomingMovie({ upcoming, title }) {
	return (
		<View className={'mb-8 space-y-4'}>
			<Text className={'text-xl text-red-400 font-semibold'}>{title}</Text>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 15 }}
			>
				{upcoming.map(item => (
					<View className={'mr-4'} key={item.name}>
						<Image
							source={{ uri: image185(item.poster_path) }}
							style={{ width: width * 0.3, height: height * 0.2 }}
							className={'rounded-lg'}
						/>
						<Text className={'text-white'}>
							{item.title.length > 12 ? item.title.slice(0, 12) + '...' : item.title}
						</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
