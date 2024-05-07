import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
	return (
		<View>
			<Text>Index</Text>
			<Link href="/register/" asChild>
				<Button title="Open Register Page" />
			</Link>

			<Link href="/one" asChild>
				<Button title="Open TabOne Page" />
			</Link>
		</View>
	);
};

export default Index;

const styles = StyleSheet.create({});
