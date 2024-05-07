import { StyleSheet, Text, View } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayout = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index" // This is the name of the page and must match the url from root
					options={{
						title: 'overview',
						drawerLabel: 'Home',
					}}
				/>

				<Drawer.Screen
					name="home/index" // This is the name of the page and must match the url from root
					options={{
						title: 'HomeIndex',
						drawerLabel: 'HomeIndex',
					}}
				/>
				<Drawer.Screen
					name="(tabs)"
					options={{
						headerShown: false,
					}}
				/>
				<Drawer.Screen
					name="[missing]"
					options={{
						headerTitle: '404',
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
};

export default RootLayout;

const styles = StyleSheet.create({});
