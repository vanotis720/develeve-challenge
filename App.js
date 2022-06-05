import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppBottom from './src/navigation/AppBottom';
import StartedStack from './src/navigation/StartedStack';


export default function App() {
	const [state, setState] = React.useState(false);

	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userName;

			try {
				userName = await AsyncStorage.getItem('username');
				setState(true);
			} catch (e) {
				// Restoring token failed
			}
		};

		bootstrapAsync();
	}, []);

	return (
		<NavigationContainer>
			{state == false ? (
				<StartedStack />
			) : (
				<AppBottom />
			)}
		</NavigationContainer>
	);
}
