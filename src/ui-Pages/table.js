import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const rows = [
    {
      id: 1,
      activtyName: "swimming",
      duration: 2,
      freq: "2 days in week",
    },
    {
      id: 1,
      activtyName: "swimming",
      duration: 2,
      freq: "2 days in week",
    },
    {
      id: 1,
      activtyName: "swimming",
      duration: 2,
      freq: "2 days in week",
    },
    {
      id: 1,
      activtyName: "swimming",
      duration: 2,
      freq: "2 days in week",
    },
  ];
const useStyles = makeStyles((theme) => ({
  formControl: {
    // marginTop: "100px",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TableScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Grid
      container
        style={
          {
            //   display: "grid",
            //   justifyContent: "center",
            //   height: "100vh",
            //   alignItems: "center",
          }
        }
      >
        <Grid item md={12} style={{display:"flex",justifyContent:"right"}}>
        <Button>Add</Button>
        </Grid>
        <Grid item md={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>activty</TableCell>
                <TableCell>Duration in minutes</TableCell>
                <TableCell>Freq</TableCell>
                <TableCell>Action</TableCell>
                {/* <TableCell>&nbsp; &nbsp; &nbsp;</TableCell>
                <TableCell>&nbsp; &nbsp; &nbsp;</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.activtyName}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.freq}</TableCell>
                  <TableCell>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </TableCell>
{/* 
                  <TableCell></TableCell>
                  <TableCell></TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>

      </Grid>
    </>
  );
};

export default TableScreen;
