import React from "react";
import Footer from "../footer/Footer";
import { makeStyles, Grid } from "@material-ui/core";
import about from "../../assets/aboutus.jpg";
import titleData from "../../data/data";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${about})`,
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
  media: {
    height: "450px",
    // paddingTop: "56.25%", // 16:9
  },

  mediacard: {
    [theme.breakpoints.up("sm")]: {
      "& h1": {
        paddingLeft: "50px",
        paddingTop: "100px",
        color: "white",
      },
    },
  },
}));

const About = () => {
  const classes = useStyles();

  const displayBanner = () => {
    return (
      <div className={classes.root}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 style={{ textAlign: "center" }}>ABOUT US</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayImage = () => {
    return (
      <div>
        <Grid container direction="row">
          {titleData.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Card className={classes.mediacard}>
                <CardMedia className={classes.media} image={item.img}>
                  <h1>{item.title}</h1>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <>
      {displayBanner()}
      {displayImage()}
      <Footer />
    </>
  );
};

export default About;
