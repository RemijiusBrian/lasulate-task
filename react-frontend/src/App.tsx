import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { orange } from '@mui/material/colors';
import AdminPanelPage from './pages/AdminPanelPage';

// ---------
// Defined 2 pages -
// > Signup page ('/signup') to register users
// > Admin page ('/admin') to list registered users from DB
// > All other relative paths default to signup page
// ---------

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: orange
    }
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<RegistrationPage />} />
              <Route path="/admin" element={<AdminPanelPage />} />
              <Route path="/*" element={<RegistrationPage />} />
            </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
