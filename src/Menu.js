import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "./logo.jpg";
import { Link } from "react-scroll";

const drawerWidth = 300;
const TEXT_COLOR = "black";
const navItems = ["Intro", "Terapeuti", "Služby", "Akce"];

const Menu = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="" height="100px" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            key={item}
            activeClass="active"
            to={item}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          //onSetActive={this.handleSetActive}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", color: `${TEXT_COLOR}`, transition: "top 1s", top: props.scrollDir ? "0" : "-120px" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{padding: { md: "0", xl: "0 6em" }, width: "100%", display: "flex", alignItems: "center"}}>
            <Box sx={{ mr: "auto", display: { xs: "none", sm: "block" } }}>
              <img src={logo} alt="" height={"80px"} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link
                  key={item}
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  <Button key={item} sx={{ color: `${TEXT_COLOR}`, pr: "1em", pl: "1em" }}>
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Menu;
