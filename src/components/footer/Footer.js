import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import data from "../../data/data.json";

const useStyles = makeStyles((theme) => ({
  abc: {
    backgroundColor: "#101010",
  },
  cssFocused: {},

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#FFD700",
    },
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      border: "2px solid",
      borderColor: "yellow",
    },
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#696969",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.abc}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <TextField
              id="firstname"
              label="FirstName"
              variant="outlined"
              fullWidth="true"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </div>
          <div className="col-lg-6">
            <h1>hi</h1>
            <h1>bye</h1>
          </div>
          <div className="col-lg-3">
            <h1>hi</h1>
            <h1>bye</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
