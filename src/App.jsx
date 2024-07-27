import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/Coin";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  var cursor;
  var cursorPointer;

 

  return (
    <div className="App">
      
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/coin/:id" element={<Coin />} />
    
          </Routes>

          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
