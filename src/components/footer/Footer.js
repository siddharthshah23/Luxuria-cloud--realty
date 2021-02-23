import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import data from "../../data/data.json";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    textColor: "white",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  footerRoot: {
    backgroundColor: "#101010",
  },

  root: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "10px",
    },
  },

  xyz: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "50px",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();

  const displayFooter = () => {
    return (
      <div className={classes.footerRoot}>
        <div className={classes.root}>
          <div class="container-fluid">
            <div class="row pt-5 pr-md-5">
              <div class="col-md-3">
                <div class="row">
                  {data.linkData.map((item, i) => (
                    <div class="col-12 d-flex flex-column align-items-center">
                      <Button
                        {...{
                          key: i,
                          color: "inherit",
                          to: item.href,
                          component: RouterLink,
                          className: classes.menuButton,
                        }}
                      >
                        <h5 style={{ color: "#696969", textAlign: "center" }}>
                          {item.label}
                        </h5>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div class="col-md-6 mt-2">
                <div class="row">
                  <div class="col-12 d-flex flex-column align-items-center">
                    <div className={classes.xyz}>
                      <h1 style={{ textAlign: "center", color: "white" }}>
                        CONNECT WITH US
                      </h1>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <InstagramIcon
                          fontSize="large"
                          style={{ color: "#FFD700" }}
                        />
                      </div>

                      <div class="col-6">
                        <FacebookIcon
                          fontSize="large"
                          style={{ color: "#FFD700" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div className={classes.xyz}>
                  {data.footer.map((item, i) => (
                    <div class="col-12 d-flex flex-column align-items-center">
                      <Button
                        {...{
                          key: i,
                          color: "inherit",
                          to: item.href,
                          component: RouterLink,
                          className: classes.menuButton,
                        }}
                      >
                        <h5 style={{ color: "#696969", textAlign: "center" }}>
                          {item.label}
                        </h5>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div className={classes.footerRoot}>{displayFooter()}</div>;
};

export default Footer;
