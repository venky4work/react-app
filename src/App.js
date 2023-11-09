import './App.css';
import Home from './pages/Home';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import PhysicalSchema from './pages/PhysicalSchema';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter basename="/">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/physical-schema" element={<PhysicalSchema/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
    // <div className="app">
    //   <header className="app-header">
    //   <div className="app-container">
    //    <a href="/">Logo</a>
    //    <div>Data Portal</div>
    //   <ul>
    //     <li><a href="#home">Home</a></li>
    //     <li><a href="#news">News</a></li>
    //     <li><a href="#contact">Contact</a></li>
    //     <li><a href="#about">About</a></li>-
    //   </ul>
    //   <div className="app-header-space"></div>
    //   <a>Account</a>
    //   </div>  
    //   </header>
    //   <main className="app-container">
    //     <div>
    //       Welcome to Winning wong
    //     </div>

    //     <div>
    //       test
    //       </div>

    //   </main>
    // </div>
  );
}

export default App;
