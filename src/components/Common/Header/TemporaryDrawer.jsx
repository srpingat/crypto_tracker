import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TemporaryDrawer = () => {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") == "dark" ? true : false
    );
  
    useEffect(() => {
      if (localStorage.getItem("theme") == "dark") {
        setDark();
      } else {
        setLight();
      }
    }, []);
  
    const changeMode = () => {
      if (localStorage.getItem("theme") != "dark") {
        setDark();
      } else {
        setLight();
      }
      setDarkMode(!darkMode);
    };
  
    const setDark = () => {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    };
  
    const setLight = () => {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    };
    return (
      <div>
        <IconButton onClick={() => setOpen(true)}>
          <MenuRoundedIcon className="link" />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <div className="drawer-div">
            <Link href="/">
              <p className="link">Home</p>
            </Link>
          
            <Link href="/dashboard">
              <p className="link">Dashboard</p>
            </Link>
            <Switch checked={darkMode} onClick={() => changeMode()} />
          </div>
        </Drawer>
      </div>
    );
  
}

export default TemporaryDrawer