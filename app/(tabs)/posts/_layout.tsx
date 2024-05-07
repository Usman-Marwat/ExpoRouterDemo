import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const PostLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Posts Stack' }} />

			<Stack.Screen name="[postid]" options={{ title: 'Posts Details' }} />
		</Stack>
	);
};

export default PostLayout;

const styles = StyleSheet.create({});
