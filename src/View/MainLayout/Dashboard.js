import React from "react";
import Header from "../../Pages/Header";
import Carousel from "react-material-ui-carousel";
import Slide1 from "../../Assets/Slider1.jpg";
import Slide2 from "../../Assets/Slider2.jpg";
import Slide3 from "../../Assets/Slider3.jpg";
import { makeStyles } from "@mui/styles";
import Footer from "../../Pages/Footer";

const images = [Slide1, Slide2, Slide3];

const useStyles = makeStyles(() => ({
  carousel: {
    width: "100%",
    height: "400px", // Adjust the height as needed
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Carousel
        className={classes.carousel}
        autoPlay
        animation="slide"
        timeout={300}
        indicators={false}
        navButtonsAlwaysVisible
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={classes.image}
          />
        ))}
      </Carousel>
      <Footer />
    </>
  );
};

export default Dashboard;
