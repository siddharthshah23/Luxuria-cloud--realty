import React from "react";
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Divider,
} from "@material-ui/core";
import ContactImg from "../../assets/ContactImg.jpg";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${ContactImg})`,
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",

    "& h1": {
      color: "white",
    },
  },

  middleRoot: {
    display: "flex",
    backgroundColor: "#101010",
    "& h2": {
      color: "#FFD700",
      paddingTop: "25px",
      textAlign: "center",
    },
    "& h4": {
      color: "#696969",
      paddingTop: "10px",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "100px",
      paddingTop: "150px",
    },
  },
  divider: {
    background: "#FFD700",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  const displayBanner = () => {
    return (
      <div className={classes.root}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 style={{ textAlign: "center" }}>GET IN TOUCH</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayContent = () => {
    return (
      <div className={classes.middleRoot}>
        <div class="container-fluid ">
          <div class="row pr-md-5">
            <div class="col-md-2"></div>
            <div class="col-md-3  mt-5 d-flex flex-column align-items-center">
              <PhoneAndroidIcon fontSize="large" style={{ color: "#FFD700" }} />
              <h2>Phone</h2>
              <h4>
                Please contact us at <br></br>8000000000
              </h4>
            </div>
            {isMatch ? (
              <Divider
                classes={{ root: classes.divider }}
                orientation="vertical"
                flexItem
              />
            ) : null}

            <div class="col-md-3  mt-5 d-flex flex-column align-items-center">
              <RoomIcon fontSize="large" style={{ color: "#FFD700" }} />
              <h2>Address</h2>
              <h4>
                We are located at <br></br>Missisauga,<br></br>Ontario
              </h4>
            </div>
            {isMatch ? (
              <Divider
                classes={{ root: classes.divider }}
                orientation="vertical"
                flexItem
              />
            ) : null}
            <div class="col-md-3  mt-5 d-flex flex-column align-items-center">
              <EmailIcon fontSize="large" style={{ color: "#FFD700" }} />
              <h2>Email</h2>
              <h4>
                For More Information <br></br>info@abc.ca
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {displayBanner()}
      {displayContent()}
      <ContactForm />
    </>
  );
};

export default Contact;
