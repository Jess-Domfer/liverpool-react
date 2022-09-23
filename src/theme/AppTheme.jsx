
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { liverpoolTheme } from './liverpoolTheme';

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={liverpoolTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
