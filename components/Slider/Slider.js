
import SliderMobile from "./Slider.mobile";
import SliderDesktop from "./Slider.desktop";
import {
  isMobile,
} from "react-device-detect";

function Slider({slides}) {
  return (
    <>
      {isMobile ? (
        <SliderMobile slides={slides} />
      ) : (
        <SliderDesktop slides={slides} />
      )}
    </>
  );
}

export default Slider;
