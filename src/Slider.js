import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const Slider = () => {
  const images = [
    {
      img: "https://via.placeholder.com/1920x1080?text=IMAGE",
      title: "TERAPEUTI",
      dec: "SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
      to: "Terapeuti",
    },
    {
      img: "https://via.placeholder.com/1920x1080?text=IMAGE",
      title: "SLUŽBY",
      dec: "SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
      to: "Služby",
    },
    {
      img: "https://via.placeholder.com/1920x1080?text=IMAGE",
      title: "AKCE",
      dec: "SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
      to: "Akce",
    },
  ];
  return (
    <Slide>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            draggable="false"
            dragstart="false"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
            alt={image.title}
            src={image.img}
          />
          <Box
            sx={{
              visibility: { xs: "hidden", sm: "visible" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <Typography variant="h3">{image.title}</Typography>
            <Typography
              sx={{ marginTop: 4, width: "40%", textAlign: "center" }}
              variant="h5"
            >
              {image.dec}
            </Typography>
            <Link
              key={image.to}
              activeClass="active"
              to={image.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <Button
                sx={{ borderRadius: "30px", padding: "1em 3em", marginTop: 4}}
                variant="contained"
              >
                {image.to}
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Slide>
  );
};

export default Slider;
