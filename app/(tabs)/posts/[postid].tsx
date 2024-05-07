import { StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const PostDynamic = () => {
	const { postid } = useLocalSearchParams();

	return (
		<View>
			<Stack.Screen options={{ headerTitle: 'Post' + postid }} />

			<Text>PostDynamic</Text>
			<Text>This is post details page</Text>
			<Text>Post {postid}</Text>
		</View>
	);
};

export default PostDynamic;

const styles = StyleSheet.create({});
