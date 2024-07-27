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

  // useEffect(() => {
  //   cursor = document.getElementById("cursor");
  //   cursorPointer = document.getElementById("cursor-pointer");

  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursor.style.left = e.clientX + "px"),
  //       (cursor.style.top = e.clientY + "px"),
  //       (cursorPointer.style.left = e.clientX + "px"),
  //       (cursorPointer.style.top = e.clientY + "px")
  //     );
  //   });

  //   document.body.addEventListener("mousedown", function (e) {
  //     return (
  //       (cursor.style.height = "0.5rem"),
  //       (cursor.style.width = "0.5rem"),
  //       (cursorPointer.style.height = "3rem"),
  //       (cursorPointer.style.width = "3rem")
  //     );
  //   });

  //   document.body.addEventListener("mouseup", function (e) {
  //     return (
  //       (cursor.style.height = "0.3rem"),
  //       (cursor.style.width = "0.3rem"),
  //       (cursorPointer.style.height = "2rem"),
  //       (cursorPointer.style.width = "2rem")
  //     );
  //   });
  // }, []);

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
