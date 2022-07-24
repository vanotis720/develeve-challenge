import * as React from 'react';
import { StatusBar } from 'react-native';
import Onboard from './src/components/page/Onboard';
import AppRoute from './src/navigation/AppRoute';
import { AuthProvider } from './src/providers/AuthProvider';



export default function App() {
	const [firstTime, setFirstTime] = React.useState(true);

	const onFinish = () => {
		setFirstTime(false);
	}

	return (
		<AuthProvider>
			<StatusBar backgroundColor="#06bcee" />
			{firstTime ? <Onboard onFinish={onFinish} /> : <AppRoute />}
		</AuthProvider>
	);
}
