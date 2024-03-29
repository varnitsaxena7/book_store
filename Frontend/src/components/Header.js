import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={0} style={{ backgroundColor: "#232F3D", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <NavLink to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <LibraryBooksOutlinedIcon style={{ color: "#FF5733", marginRight: "5px", fontSize: "24px" }} />
          <Typography variant="h6" style={{ color: "#fff", fontWeight: 600 }}>
            Bookstore
          </Typography>
        </NavLink>
        {isMobile && (
          <IconButton
            onClick={handleMenuToggle}
            aria-label="menu"
            edge="start"
            color="inherit"
            sx={{ marginRight: "10px" }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={handleCloseMenu}
          sx={{ "& .MuiDrawer-paper": { width: "250px" } }}
        >
          <List>
            <ListItem button component={NavLink} to="/add" onClick={handleCloseMenu}>
              <ListItemText primary="Add Book" />
            </ListItem>
            <Divider />
            <ListItem button component={NavLink} to="/books" onClick={handleCloseMenu}>
              <ListItemText primary="Books" />
            </ListItem>
            <Divider />
            <ListItem button component={NavLink} to="/about" onClick={handleCloseMenu}>
              <ListItemText primary="About Us" />
            </ListItem>
          </List>
        </Drawer>
        {!isMobile && (
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              component={NavLink}
              to="/add"
              label="Add Book"
              onClick={handleCloseMenu}
              sx={{ textTransform: "none", fontWeight: 600 }}
            />
            <Tab
              component={NavLink}
              to="/books"
              label="Books"
              onClick={handleCloseMenu}
              sx={{ textTransform: "none", fontWeight: 600 }}
            />
            <Tab
              component={NavLink}
              to="/about"
              label="About Us"
              onClick={handleCloseMenu}
              sx={{ textTransform: "none", fontWeight: 600 }}
            />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
