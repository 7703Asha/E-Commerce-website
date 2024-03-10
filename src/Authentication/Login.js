import React from "react";
import {
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import Header from "../Pages/Header";
import Background from "../Assets/Background.jpg";

const Login = () => {
  return (
    <>
      {/* <Header /> */}
      <Grid
        container
        display="flex"
        justifyContent="flex-start"
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Grid item xs={12} md={5} sx={{ py: 20, pl: 15 }}>
          {/* <Card
            sx={{ py: 4, px: 4, borderRadius: 5, boxShadow: 10 }}
            display="flex"
          > */}
            <Typography
              variant="h4"
              sx={{ fontFamily: "poppins", color: "#3e1563" }}
              align="center"
            >
              Welcome Back!
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter Email"
              variant="outlined"
              sx={{
                py: 2,
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#3e1563",
                    boxShadow: "0px 0px 8px 2px rgba(62, 21, 99, 0.5)",
                    transition: "transform 0.5s ease",
                    transform: "scale(1.05)",
                  },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#3e1563",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              type="tel"
              placeholder="Enter Phone No."
              variant="outlined"
              sx={{
                pb: 2,
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#26425a",
                    boxShadow: "0px 0px 8px 2px rgba(62, 21, 99, 0.5)",
                    transition: "transform 0.5s ease",
                    transform: "scale(1.05)",
                  },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#3e1563",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                ),
                inputMode: "numeric",
              }}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#3e1563"}}
            >
              Send OTP
            </Button>
            <Typography variant="subtitle1" sx={{ py: 1 }}>
              Don't have account? <span> Sign Up</span>
            </Typography>
          {/* </Card> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
