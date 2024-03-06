import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Home, Movie } from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Details') {
							iconName = focused ? 'settings' : 'settings-outline';
						}

						return <IonIcon name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: 'blue',
					tabBarInactiveTintColor: 'black',
				})}
			>
				<Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
				<Tab.Screen name='Movie' component={Movie} options={{ headerShown: false }} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
