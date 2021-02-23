import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#101010",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "200px",
      paddingTop: "50px",
    },

    "& label": {
      color: "white",
    },

    "& h2": {
      textAlign: "center",
      color: "#696969",
    },
  },
  responsive: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "50px",
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
        <form>
          <div class="row pl-md-0 pt-5 mt-5">
            <div class="col-md-2"></div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-12 d-flex flex-column align-items-center">
                  <h3>Name</h3>
                </div>
                <div class="col-12 mt-4 pt-4 d-flex flex-column align-items-center">
                  <h3>Name</h3>
                </div>
                <div class="col-12 mt-4  pt-4 d-flex flex-column align-items-center">
                  <h3>Name</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <section className={classes.responsive}>
                <div class="row mt-md-0 mt-sm-5">
                  <div class="col-md-8 d-flex flex-column align-items-center">
                    <h3>Name</h3>
                  </div>
                  <div class="col-md-8 mt-4 pt-4 d-flex flex-column align-items-center">
                    <h3>Name</h3>
                  </div>
                  <div class="col-md-8 mt-4 pt-4  d-flex flex-column align-items-center">
                    <h3>Submit</h3>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
