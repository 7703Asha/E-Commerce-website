import "./App.css";
// import Login from "./Authentication/Login"
// import SignUp from "./Authentication/SignUp";
import Routes from 'routes';
import { ThemeProvider } from '@mui/material/styles';
// import themes from 'themes';

function App() {
  
  return (
    <ThemeProvider >
      <Routes />
    </ThemeProvider>
  );
}

export default App;
