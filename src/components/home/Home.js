import React from "react";
import luxuria from "../../assets/luxuria.jpg";
import { makeStyles } from "@material-ui/core";
import data from "../../data/data.json";

const useStyles = makeStyles((theme) => ({
  // Image and Heading CSS
  root: {
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${luxuria})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",

    "& h1": {
      [theme.breakpoints.up("sm")]: {
        color: "white",
        fontSize: "4rem",
      },
      [theme.breakpoints.down("sm")]: {
        color: "white",
        fontSize: "2rem",
      },
    },

    "& h4": {
      [theme.breakpoints.up("sm")]: {
        color: "white",
        fontSize: "1.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        color: "white",
        fontSize: "1rem",
      },
    },
  },

  //WeOffer Section CSS

  bottomRoot: {
    display: "flex",
    backgroundColor: "#101010",
    paddingBottom: "150px",

    "& h1": {
      color: "white",
    },

    "& h4": {
      color: "white",
    },

    [theme.breakpoints.up("sm")]: {
      paddingTop: "100px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  //Image and Heading
  const displayHeroBanner = () => {
    return (
      <div className={classes.root}>
        <div class="row">
          <div class="col-md-10 ml-5">
            {data.herotext.map((item, i) => (
              <h1 className={classes.h1text}>{item.main}</h1>
            ))}
          </div>
          <div class="col-md-4  ml-5">
            {data.herotext.map((item, i) => (
              <h4>{item.sub}</h4>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Display We Offer

  const displayBottomSection = () => {
    return (
      <div className={classes.bottomRoot}>
        <div class="container-fluid ">
          <section className={classes.bottom}>
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 mt-5">
                {data.weoffer.map((item, i) => (
                  <h1 style={{ textAlign: "center" }}>{item.heading}</h1>
                ))}
              </div>
              <div class="col-md-3"></div>
            </div>
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                {data.weoffer.map((item, i) => (
                  <h4 style={{ textAlign: "center" }}>{item.subheading}</h4>
                ))}
              </div>
              <div class="col-md-3"></div>
            </div>

            <div class="row mt-5">
              {data.weoffer.slice(1).map((item, i) => (
                <div class="col-md-4 mt-5">
                  <h1 style={{ textAlign: "center" }}>{item.offerheading}</h1>
                  <h4 style={{ textAlign: "center" }}>{item.offersub}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div>
      {displayHeroBanner()}
      {displayBottomSection()}
    </div>
  );
};

export default Home;
