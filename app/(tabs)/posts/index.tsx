import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const PostsIndex = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Link style={styles.post} href="/posts/1">
				Open Post1
			</Link>
			<Link style={styles.post} href="/posts/2">
				Open Post2
			</Link>
			<Link style={styles.post} href="/posts/3">
				Open Post3
			</Link>
		</View>
	);
};

export default PostsIndex;

const styles = StyleSheet.create({
	post: {
		fontSize: 20,
		marginVertical: 10,
		color: 'dodgerblue',
	},
});
