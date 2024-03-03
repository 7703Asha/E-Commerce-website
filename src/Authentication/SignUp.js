import React from "react";
import Background from "../Assets/Background.jpg";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const SignUp = () => {
  return (
    <>
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
          <Grid container display="flex">
            <Grid item xs={12} md={12}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "poppins", color: "#3e1563", py: 1 }}
                align="center"
              >
                Create Account
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    placeholder="First Name"
                    variant="outlined"
                    sx={{
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
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    placeholder="Last Name"
                    variant="outlined"
                    sx={{
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
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
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
            </Grid>
            <Grid item xs={12} md={12}>
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
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#3e1563" }}
              >
                Register
              </Button>
              <Typography variant="subtitle1" sx={{ py: 1 }}>
                Already have account?{" "}
                <span style={{ color: "#888888" }}> Sign In</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
