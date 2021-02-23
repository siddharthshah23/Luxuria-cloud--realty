import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import rental from "../../assets/rental.jpg";
import productsData from "../../data/products";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Footer from "../footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${rental})`,
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
  products: {
    "& h3": {
      color: "#FFD700",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        paddingTop: "50px",
      },
    },
    "& h5": {
      color: "#696969",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        paddingTop: "20px",
      },
    },
  },
  media: {
    height: "250px",
    // paddingTop: "56.25%", // 16:9
  },

  mediacard: {
    backgroundColor: "#101010",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "100px",
    },
  },

  // action: {
  //   display: "flex",
  // },
  iconArrow: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Rental = () => {
  const classes = useStyles();

  const displayBanner = () => {
    return (
      <div className={classes.root}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 style={{ textAlign: "center" }}>
                Experience Luxuary with Luxuria
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayProducts = () => {
    return (
      <div className={classes.products}>
        <Grid container direction="row">
          {productsData.map((item, i) => (
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Card className={classes.mediacard}>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                ></CardMedia>
                <CardContent>
                  <h3>{item.title}</h3>
                  <h5>{item.desc}</h5>
                </CardContent>
                <CardActions className={classes.action}>
                  <IconButton aria-label="More" className={classes.iconArrow}>
                    <KeyboardArrowRightIcon
                      fontSize="large"
                      style={{ color: "#FFD700" }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <div>
      {displayBanner()}
      {displayProducts()}
      <Footer />
    </div>
  );
};

export default Rental;
