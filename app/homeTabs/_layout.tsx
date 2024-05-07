import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const HomeTabslayout = () => {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="settings" color={color} size={size} />
					),
				}}
			/>
		</Tabs>
	);
};

export default HomeTabslayout;

const styles = StyleSheet.create({});
