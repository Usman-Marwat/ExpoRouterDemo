import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const TabOne = () => {
	const router = useRouter();

	return (
		<View>
			<Text>TabOne</Text>
			<Button title="Go back" onPress={() => router.back()} />
		</View>
	);
};

export default TabOne;

const styles = StyleSheet.create({});
