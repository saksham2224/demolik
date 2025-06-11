import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import homeStyle from "./Home.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { display } from "@mui/system";

const Home = () => {
  return (
    <>
      {/* navigation bar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#a6dcff",
          marginTop: "1rem",
          borderRadius: "25px 25px 25px 25px",
        }}
      >
        <Toolbar>
          {/* <img
            src="/logo.jpg"
            alt="Logo"
            style={{ height: "40px", width: "40px", marginRight: "8px" }}
          /> */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            LikhWalo
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" }, color: "#000" }}>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Home
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Get A Job
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              How It Works
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Service
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              About
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Contact
            </Button>
          </Box>

          {/* Hamburger Menu Icon for small screens */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box className={homeStyle["hero-section"]}>
        <Box className={homeStyle["hero-text"]}>
          <Typography
            variant="h2"
            component="h1"
            className={homeStyle["hero-title"]}
            sx={{
              "& span": {
                display: "block",
                fontSize: "5rem",
                marginLeft: "2rem",

                fontWeight: "bold",
                lineHeight: "1.3",
              },
            }}
          >
            <span>Get Your</span>
            <span style={{ color: "#42a5f5" }}>Assignment</span>
            <span>Done by</span>
            <span>Experts</span>
          </Typography>
          <Typography
            component={"p"}
            sx={{ marginLeft: "2rem", lineHeight: "1.5" }}
          >
            Crafting compelling narratives that elevate your message and engage
            your audience.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginLeft: "2rem",
              marginTop: "1rem",
              backgroundColor: "#42a5f5",
              color: "#fff",
              textTransform: "none",
              fontSize: "1.2rem",
              borderRadius: "1.4rem",
            }}
          >
            Order Now <ArrowForwardIcon sx={{ marginLeft: "0.5rem" }} />
          </Button>
        </Box>
        <Box className={homeStyle["hero-image"]}></Box>
      </Box>

      {/* How it Works Section */}
      <Box className={homeStyle["how-it-works"]}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          How It Works
        </Typography>

        <Box className={homeStyle["steps"]}>
          {[
            { title: "Order Now" },
            { title: "Fill All Details" },
            { title: "Pay ₹100 for Confirmation" },
            { title: "Agent Will Connect" },
            { title: "Share Your Requirements" },
            { title: "Work Will Start" },
            { title: "Final Invoice & Delivery" },
          ].map((step, index) => (
            <Card
              variant="div"
              key={index}
              className={homeStyle["step-card"]}
              sx={{
                borderRadius: "10px",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      borderRadius: "50%",
                      fontSize: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {index + 1}
                  </Box>
                </Box>
                <Typography component="p" sx={{ color: "#000" }}>
                  {step.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Empowering section */}
      <Box className={homeStyle["empowering-section"]}>
        <Box className={homeStyle["empowering-text"]}>
          <Typography
            variant="h4"
            component={"h2"}
            sx={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}
          >
            Empowering Writers Through Creativity
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            sx={{ fontSize: "1.2rem", fontWeight: 400, color: "#333" }}
          >
            Helping Students Tell Their Stories
          </Typography>
        </Box>

        <Box className={homeStyle["empowering-card"]}>
          {[
            { title: "Quality", img: "/s_key_images_1.svg" },
            { title: "Dependability", img: "/s_key_images_2.svg" },
            { title: "Innovation", img: "/s_key_images_3.svg" },
            { title: "Creativity", img: "/s_key_images_4.svg" },
          ].map((item, index) => (
            <Box key={index} className={homeStyle["empower-card-item"]}>
              <Typography
                sx={{ color: "#1976d2", fontSize: "2rem", fontWeight: 700 }}
              >
                0{index + 1}
              </Typography>

              <Typography variant="h6" className={homeStyle["empower-title"]}>
                {item.title}
              </Typography>

              <img
                src={item.img}
                alt={item.title}
                className={homeStyle["empower-img"]}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Services Section */}
      <Box className={homeStyle["services-section"]}>
        <Box className={homeStyle["service-text"]}>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginLeft: "3.5rem",
            }}
          >
            <span>Discover the</span>
            <span>range of services</span>
            <span>we can provide</span>
            <span>for you</span>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 500,
              marginLeft: "3.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
              }}
            >
              Assignment Writing
            </span>
            <span variant="body2">
              As a premier writing service, we empower individuals and
              businesses to communicate effectively in a dynamic world.
            </span>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 500,
              marginLeft: "3.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
              }}
            >
              PPT Making
            </span>
            <span variant="body2">
              We have gathered extensive expertise in providing high-quality
              writing services tailored to meet diverse client needs. Explore
              our portfolio showcasing work from clients across various
              industries.
            </span>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 500,
              marginLeft: "3.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
              }}
            >
              Resume Building
            </span>
            <span variant="body2">
              We have gathered extensive expertise in providing high-quality
              writing services tailored to meet diverse client needs.
            </span>
          </Typography>
        </Box>
        <Box className={homeStyle["service-image"]}></Box>
      </Box>
    </>
  );
};

export default Home;
