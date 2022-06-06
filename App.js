import * as React from 'react';
import { StatusBar } from 'react-native';
import AppRoute from './src/navigation/AppRoute';
// import { store } from './src/redux/store';
// import { Provider } from 'react-redux';
import { AuthProvider } from './src/providers/AuthProvider';



export default function App() {
	return (
		// <>
		// 	<Provider store={store}>
		// 		<AppRoute />
		// 		<StatusBar style="auto" />
		// 	</Provider>
		// </>
		<AuthProvider>
			<StatusBar backgroundColor="#06bcee" />
			<AppRoute />
		</AuthProvider>
	);
}
