import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../Assets/Header.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <Grid container spacing={2} sx={{py: 1, px:2}}>
      <Grid item xs={12} md={3}>
        <img
          src={Logo}
          style={{ width: "200px", height: "60px" }}
          alt="Logo"
        />
      </Grid>
      <Grid item xs={12} md={1}>
        <Typography variant="body1">
          Home
        </Typography>
      </Grid>
      <Grid item xs={12} md={1.5}>
        <Typography variant="body1">
          Categories
        </Typography>
      </Grid>
      <Grid item xs={12} md={1.5}>
        <Typography variant="body1">
          Products
        </Typography>
      </Grid>
      <Grid item xs={12} md={1.5}>
        <Typography variant="body1">
          Contact Us
        </Typography>
      </Grid>
      <Grid item md={1}>
        <ShoppingCartIcon />
      </Grid>
      <Grid item md={1}>
        <FavoriteIcon />
      </Grid>
      <Grid item md={1}>
        <PersonIcon />
      </Grid>
    </Grid>
  );
};

export default Header;
