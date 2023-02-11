import * as React from "react";
import { Element } from "react-scroll";
import Cenik from "./Cenik";
import Menu from "./Menu";
import MyMap from "./MyMap";
import Slider from "./Slider";
import Terapeuti from "./Terapeuti";

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

  return (
    <div>
      <Menu scrollDir={scrollDir} />
      <Element name="Intro" className="element">
        <Slider />
      </Element>
      <Element name="Terapeuti" className="element">
        <Terapeuti />
      </Element>
      <Element name="Ceník" className="element">
        <Cenik />
      </Element>
      <Element name="Kontakt" className="element">
        <MyMap />
      </Element>
    </div>
  );
}

export default App;
