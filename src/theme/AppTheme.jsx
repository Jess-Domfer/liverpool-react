import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { liverpoolTheme } from './liverpoolTheme';

export const AppTheme = ({ children }) => {
	return (
		<ThemeProvider theme={liverpoolTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
