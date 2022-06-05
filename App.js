import { NavigationContainer } from '@react-navigation/native';
import AppBottom from './src/navigation/AppBottom';
import StartedStack from './src/navigation/StartedStack';

export default function App() {
	return (
		<NavigationContainer>
			{/* <StartedStack /> */}
			<AppBottom />
		</NavigationContainer>
	);
}
