import * as React from "react";
import { Element } from "react-scroll";
import Cenik from "./Cenik";
import Menu from "./Menu";
import MyMap from "./MyMap";
import Slider from "./Slider";
import Box from "@mui/material/Box";
import Terapeuti from "./Terapeuti";
import { Parallax, Background } from "react-parallax";
import { Typography } from "@mui/material";

function App() {
  const threshold = 0;
  const [scrollDir, setScrollDir] = React.useState(true);

  React.useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? false
          : true;
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

  const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

  return (
    <div>
      <Menu scrollDir={scrollDir} />
      <Element name="Intro" className="element">
        <Slider />
      </Element>
      <Element name="Terapeuti" className="element">
        <Terapeuti />
      </Element>
      <Parallax bgImage={image1} strength={500}>
        <Box style={{ height: 500 }}>
          <Box style={insideStyles}>
            <Typography
              variant="h1"
              sx={{ color: "white" }}>
              PARALLAX
            </Typography>
          </Box>
        </Box>
      </Parallax>
      <Element name="Služby" className="element">
        <Cenik />
      </Element>
      <Element name="Akce" className="element">
        <MyMap />
      </Element>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", height: "40vh", backgroundColor: "lightgray" }}>
        <Typography variant={"h3"} gutterBottom>
          FOOTER
        </Typography>
      </Box>
    </div>
  );
}

export default App;
