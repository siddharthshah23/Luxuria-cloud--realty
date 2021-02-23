import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import data from "../../data/data.json";

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    size: "18px",
    display: "flex",
    alignItems: "center",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "15px",
    color: "white",
    justifyContent: "center",

    "&:hover": {
      backgroundColor: "#b29700",
    },
  },
  SideDrawerStyle: {
    backgroundColor: "#181818",
  },

  sideNavBar: {
    backgroundColor: "#181818",
  },
  list: {
    backgroundColor: "#181818",
  },
});

const Demo = ({ headersData }) => {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" className={classes.SideDrawerStyle}>
        <ListItem>
          <ButtonGroup orientation="vertical">
            {data.linkData.map((item, i) => (
              <div>
                <Button
                  {...{
                    key: i,
                    color: "inherit",
                    to: item.href,
                    component: RouterLink,
                    className: classes.menuButton,
                  }}
                >
                  <h4 style={{ color: "#696969" }}>{item.label}</h4>
                </Button>
              </div>
            ))}
          </ButtonGroup>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.sideNavBar}>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer("left", true)}
        onClose={toggleDrawer("left", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </div>
  );
};

export default Demo;
