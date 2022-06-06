import * as React from 'react';
import AppRoute from './src/navigation/AppRoute';
import { store } from './src/redux/store';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';



export default function App() {
	return (
		<>
			<Provider store={store}>
				<AppRoute />
				<StatusBar style="auto" />
			</Provider>
		</>
	);
}
