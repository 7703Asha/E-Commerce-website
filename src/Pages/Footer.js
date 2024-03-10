import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#d4d7d9" }}>
        <Grid item xs={3} md={3}>
          <Typography variant="h6">.ENV</Typography>
          <Typography variant="subtitle2">Who We Are?</Typography>
          <Typography variant="subtitle2">Join Our Team</Typography>
          <Typography variant="subtitle2">Terms & Conditions</Typography>
          <Typography variant="subtitle2">We Respect Your Privacy</Typography>
          <Typography variant="subtitle2">Fees & Payments</Typography>
          <Typography variant="subtitle2">Returns & Refunds Policy</Typography>
          <Typography variant="subtitle2">
            Promotions Terms & Conditions
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography variant="h6">Help</Typography>
          <Typography variant="subtitle2">Track Your Order</Typography>
          <Typography variant="subtitle2">Frequently Asked Quetions</Typography>
          <Typography variant="subtitle2">Returns</Typography>
          <Typography variant="subtitle2">Cancellations</Typography>
          <Typography variant="subtitle2">Payments</Typography>
          <Typography variant="subtitle2">Customer Care</Typography>
          <Typography variant="subtitle2">How Do I Redeem My Coupon</Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography variant="h6">Shop by</Typography>
          <Typography variant="subtitle2">Men</Typography>
          <Typography variant="subtitle2">Women</Typography>
          <Typography variant="subtitle2">Kids</Typography>
          <Typography variant="subtitle2">Indie</Typography>
          <Typography variant="subtitle2">Stores</Typography>
          <Typography variant="subtitle2">New Arrivals</Typography>
          <Typography variant="subtitle2">Brand Directory</Typography>
          <Typography variant="subtitle2">Home</Typography>
          <Typography variant="subtitle2">Collections</Typography>
        </Grid>
        <Grid item xs={3} md={3} direction="column">
          <Typography variant="h6">Follow us</Typography>
          <FacebookIcon sx={{ pr: 1 }} />
          <InstagramIcon sx={{ px: 1 }} />
          <XIcon sx={{ px: 1 }} />
          <PinterestIcon sx={{ px: 1 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
