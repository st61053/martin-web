import React from "react";
import Box from "@mui/material/Box";
import { Card, CardContent, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const TERAPEUTI = [
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
  {
    name: "Pepa",
    desc: "sample text sample text sample text sample text sample text ",
    img: "https://via.placeholder.com/400x400?text=PHOTO",
  },
];

const Terapeuti = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: { xs: "4em 3em", sm: "4em 6em", xl: "4em 8em" },
        backgroundColor: "#e6e6e6"
      }}
    >
      <Grid container spacing={4}>
        {TERAPEUTI &&
          TERAPEUTI.map((terapeut, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card sx={{ height: "50vh" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    p: 0,
                  }}
                >
                  <Box
                    sx={{
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      p: 0,
                    }}
                  >
                    <img
                      draggable="false"
                      dragstart="false"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt={terapeut.name}
                      src={terapeut.img}
                    />
                  </Box>
                  <Typography
                    gutterBottom
                    sx={{
                      marginTop: 2,
                      width: "80%",
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                    variant="h5"
                  >
                    {terapeut.name}
                  </Typography>
                  <Typography
                    sx={{ width: "80%", textAlign: "left" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {terapeut.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Terapeuti;
