import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Detail({ navigation }) {
	return (
		<View className='flex-1 items-center justify-center bg-black'>
			<Text className='font-semibold text-[30px]'>Detail</Text>

			<Button title='Go to Details' onPress={() => navigation.navigate('Home')} />
		</View>
	);
}
