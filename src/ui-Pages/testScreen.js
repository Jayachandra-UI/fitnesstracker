import { Button, Grid, MenuItem, Typography } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useNavigate } from 'react-router-dom' ;

const useStyles = makeStyles((theme) => ({
  formControl: {
    // marginTop: "100px",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TestScren = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [validate, setValidate] = React.useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const validateFeilds = () => {
    if (age.length > 0) {
      navigate(`/${age}/login`);
    }
    else{
        setValidate("please select any one of the option")
    }
  };

  return (
    <>
      <Grid style={{display:"grid",justifyContent:"center",height:"100vh",alignItems:"center"}}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"User"}>User</MenuItem>
          </Select>
        </FormControl>

        <Typography style={{color:"red"}}>{validate}</Typography>
        <Button variant="outlined" color="primary" onClick={()=>{validateFeilds()}}>Submit</Button>
      </Grid>
    </>
  );
};

export default TestScren;
