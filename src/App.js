import '@fontsource/dm-sans';
import FeedbackForm from './feedback/FeedbackForm';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, Arial',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component='main' maxWidth='xs'>
          <FeedbackForm />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
