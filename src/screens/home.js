import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home({ navigation }) {
	return (
		<View className='flex-1 items-center justify-center bg-black'>
			<Text className='font-semibold text-[30px]'>Nosirbek</Text>

			<Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
		</View>
	);
}
