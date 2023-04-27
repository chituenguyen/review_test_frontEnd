import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "20px !important", // customize width here
    height: "20px !important", // customize height here
  },
}));
const TitleLoading = ({ name }) => {
  const classes = useStyles(); // define the classes variable
  return (
    <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
      {name} <CircularProgress className={classes.root} />
    </div>
  );
};

export default TitleLoading;
