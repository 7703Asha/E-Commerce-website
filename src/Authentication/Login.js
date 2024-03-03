import React from "react";
import { Card, Grid, Typography, TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      sx={{ background: "linear-gradient(to bottom , #e1bee7, #ffffff)", height: "100vh" }}
    >
      <Grid item xs={12} md={5} sx={{ py: 10 }}>
        <Card
          sx={{ py: 4, px: 4, borderRadius: "2%", boxShadow: 10 }}
          display="flex"
        >
          <Typography variant="h4">Welcome Back!</Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Enter Email"
            variant="outlined"
            sx={{ py: 2 }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Enter Phone No."
            variant="outlined"
            sx={{ pb: 2 }}
          />
          <Button variant="contained">Send OTP</Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
