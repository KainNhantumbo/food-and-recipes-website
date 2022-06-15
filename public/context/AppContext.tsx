import React, { ReactNode, useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark, primary } from '../themes/themes';
import { useRouter } from 'next/router';
interface AppContextProps {
	themeSwitcher: () => void;
}
interface Props {
	children: ReactNode;
}
interface ThemeSettings {
	dark_mode: boolean;
}

const context = createContext<AppContextProps>({ themeSwitcher: () => {} });
const AppContext: React.FC<Props> = ({ children }) => {
	const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
		dark_mode: false,
	});
	const [mode, setMode] = useState(primary);

	const themePrefers = (): void => {
		let key: string = 'UminoSettings';
		let theme_data: any = JSON.parse(
			localStorage.getItem(key) || `{"dark_mode": false}`
		);

		if (!theme_data.dark_mode || theme_data.dark_mode === undefined) {
			theme_data.dark_mode = false;
			localStorage.setItem(key, JSON.stringify(theme_data));
			setThemeSettings(theme_data);
			setMode(primary);
			return;
		}
		setThemeSettings(theme_data);
		themeSwitcher();
	};

	const themeSwitcher = (): void => {
		if (themeSettings.dark_mode === false) {
			setMode(dark);
			setThemeSettings({ dark_mode: true });
			localStorage.setItem(
				'UminoSettings',
				JSON.stringify({ dark_mode: true })
			);
			return;
		}
		setMode(primary);
		setThemeSettings({ dark_mode: false });
		localStorage.setItem('UminoSettings', JSON.stringify({ dark_mode: false }));
	};

	if (typeof window !== 'undefined') {
		console.log('You are on the browser');
		localStorage.setItem('data', JSON.stringify('donuts'));
		// 👉️ can use localStorage here
	} else {
		console.log('You are on the server');
		// 👉️ can't use localStorage
	}
	const router = useRouter()

	useEffect(() => {
		themePrefers();
	}, []);

	return (
		<ThemeProvider theme={mode}>
			<GlobalStyles />
			<context.Provider
				value={{
					themeSwitcher,
				}}
			>
				{children}
			</context.Provider>
		</ThemeProvider>
	);
};

export const useAppContext = (): AppContextProps => {
	const contextValues = useContext(context);
	return contextValues;
};

export default AppContext;
