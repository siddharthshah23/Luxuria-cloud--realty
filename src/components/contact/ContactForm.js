import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#101010",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "100px",
      paddingTop: "50px",
    },

    "& h2": {
      textAlign: "center",
      color: "#696969",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 mt-5">
            <h2>
              IF YOU HAVE ANY QUESTIONS <br></br> PLEASE DO NOT HESTITATE TO
              SEND US A MESSAGE
            </h2>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </div>
  );
};

export default ContactForm;
