import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import React from "react";
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

const RegisterScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        style={{
          display: "grid",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={10}>
          <div>
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="age" variant="outlined" />
          </div>

          <div>
            <TextField id="outlined-basic" label="email" variant="outlined" />
            <TextField id="outlined-basic" label="phone" variant="outlined" />
            <TextField id="outlined-basic" label="address" variant="outlined" />
          </div>

          <div>
            <TextField id="outlined-basic" label="gender" variant="outlined" />
            <TextField id="outlined-basic" label="height" variant="outlined" />
            <TextField id="outlined-basic" label="weight" variant="outlined" />
          </div>
        </Grid>
        <Grid item xs={1} md={1}></Grid>

      </Grid>
    </>
  );
};

export default RegisterScreen;
{/* <Button
onClick={() => {
  navigate("/register");
}}
>
Submit
</Button> */}