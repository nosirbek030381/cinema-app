import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'; // Correct import

import { image185 } from '../api';

const { width, height } = Dimensions.get('window');

export default function UpcomingMovie({ upcoming, title }) {
	const navigation = useNavigation();

	return (
		<View style={{ marginBottom: 8, marginHorizontal: 15 }}>
			<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{title}</Text>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 15 }}
			>
				{upcoming.map(item => (
					<TouchableWithoutFeedback
						key={item.id}
						onPress={() => navigation.navigate('Movie', item)}
					>
						<View style={{ marginRight: 4 }}>
							<Image
								source={{ uri: image185(item.poster_path) }}
								style={{ width: width * 0.3, height: height * 0.2, borderRadius: 8 }}
							/>
							<Text style={{ color: 'white' }}>
								{item.title.length > 12 ? item.title.slice(0, 12) + '...' : item.title}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				))}
			</ScrollView>
		</View>
	);
}
