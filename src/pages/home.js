import React from 'react';
import { StatusBar, Text, View } from 'react-native';

export default function Home() {
	return (
		<View className='flex-1 items-center justify-center bg-black'>
			<Text>Nosirbek</Text>
			<StatusBar style='auto' />
		</View>
	);
}
