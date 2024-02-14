import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Detail, Home } from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name='Home' component={Home} />
				<Tab.Screen name='Details' component={Detail} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
