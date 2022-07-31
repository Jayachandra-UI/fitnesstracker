import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import { useEffect, useState } from "react";
import { AppBar, MenuItem, MenuList, Toolbar, Typography } from "@material-ui/core";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddScreen from "./ui-Pages/secondScreen";
import FirstScreen from "./ui-Pages/firstScreen";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();
  const [getData, setGetData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("hclient_id", "1");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:8084/api/questions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGetData([...result]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <MenuList>
            <MenuItem>Fitness Tracker</MenuItem>
          </MenuList>
          <MenuList
            style={{
              display: "flex",
              padding: "10px 10px 0px 35px",
            }}
          >
            <MenuItem>Home</MenuItem>
            <MenuItem>About us</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/blogs");
              }}
            >
              Login
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </MenuItem>
          </MenuList>
        </Toolbar>
      </AppBar>



      <Typography style={{paddingTop:"250px"}}>Fitness Tracker</Typography>
    </div>
  );
}

export default App;
