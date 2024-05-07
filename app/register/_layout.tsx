import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

export default function RegisterLayout() {
	return (
		<View>
			<Text>Header</Text>
			<Slot />
			<Text>Footer</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
