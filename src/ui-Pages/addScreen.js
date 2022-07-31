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

const AddScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();
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
    console.log(Objsize,"Objsize")
    debugger;
    if (Objsize === 0) {
        navigate("/table");
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

export default AddScreen;
