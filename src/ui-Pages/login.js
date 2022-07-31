import { Button, Grid, MenuItem, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // marginTop: "100px",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LoginScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = new URLSearchParams();

  console.log(params,"paramsparams")

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorsForm, setErrorsForm] = useState({});


  const submitClck = () =>{
    let formIsValid = true;
    let errorsForm = {};
    console.log(username,"username")

    if (username === "") {
      formIsValid = false;
      errorsForm["usernameErr"] = "Please enter username";
    }
    if (password === "") {
      formIsValid = false;
      errorsForm["passwordErr"] = "Please enter password";
    }
    setErrorsForm(errorsForm);

    var Objsize = Object.keys(errorsForm).length;
    if (Objsize === 0) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = "";

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `http://localhost:9091/login/getCredentials/user/${username}/${password}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result === "login") {
            navigate("/table");
          }  
        })
        .catch((error) => console.log("error", error));
    }
  }



  return (
    <>
      <Grid
        style={{
          display: "grid",
          justifyContent: "center",
          //   height: "100vh",
          //   alignItems: "center",
        }}
      >
        <div style={{ paddingTop: "100px" }}>
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            // value={username}
            onChange={(e) => {
                // console.log(e.target.value)
              setUsername(e.target.value);
            }}
          />
          <Typography>{errorsForm.usernameErr}</Typography>
        </div>
        <div style={{ paddingTop: "50px" }}>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            // value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
          />
          <Typography>{errorsForm.passwordErr}</Typography>

        </div>
        <Typography>
        {errorsForm.loginErr}
        </Typography>
        <Button
          style={{ marginTop: "50px" }}
          onClick={() => {
            submitClck();
          }}
        >
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default LoginScreen;
