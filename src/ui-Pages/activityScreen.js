import { AppBar, Button, FormControl, FormHelperText, Grid, MenuItem, MenuList, Select, Tab, Tabs, TextField, Toolbar, Typography } from "@material-ui/core";
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
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ActivityScreen = () => {
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
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <MenuList>
              <Typography>Activity Selection Screen</Typography>
            </MenuList>
          </Toolbar>
        </AppBar>

        <Tabs
          // value={value}
          // onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Activty" />
          <Tab label="Diet" />
          <Tab label="Report" />
        </Tabs>
        <FormControl className={classes.formControl}>
          <Select
            // value={age}
            // onCshange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Placeholder</FormHelperText>
        </FormControl>
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

export default ActivityScreen;
