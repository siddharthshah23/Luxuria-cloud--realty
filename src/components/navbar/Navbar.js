import React from "react";
import data from "../../data/data.json";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
  Container,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import SideDrawer from "../navbar/SideDrawer";

const useStyles = makeStyles({
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    size: "18px",
    marginLeft: "38px",
    padding: "15px",

    "&:hover": {
      backgroundColor: "#b29700",
    },
  },

  menuLink: {
    size: "18px",
  },

  toolbarnav: {
    display: `flex`,
    justifyContent: `center`,
    backgroundColor: "#181818",
  },

  heading: {
    display: "flex",
    justifyContent: `center`,
    backgroundColor: "#181818",
  },
});

const Navbar = () => {
  const { menuButton, toolbarnav, heading } = useStyles();

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  //Desktop

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbarnav}>
        {data.linkData.map((item, i) => (
          <div>
            <Button
              {...{
                key: i,
                color: "inherit",
                to: item.href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              <h4 style={{ color: "#696969" }}>{item.label}</h4>
            </Button>
          </div>
        ))}
      </Toolbar>
    );
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={heading}>
          <div>
            <h4>LUXURIA</h4>
          </div>
        </Toolbar>
        {isMatch ? <SideDrawer /> : <>{displayDesktop()}</>}
      </AppBar>
    </div>
  );
};

export default Navbar;
