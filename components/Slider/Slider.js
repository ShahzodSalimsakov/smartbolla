
import SliderMobile from "./Slider.mobile";
import SliderDesktop from "./Slider.desktop"
import {
  isMobile,
} from "react-device-detect";

function Slider({ slides, locale }) {
  return (
    <>
      {isMobile ? (
        <SliderMobile slides={slides} locale={locale} />
      ) : (
        <SliderDesktop slides={slides} locale={locale} />
      )}
    </>
  );
}

export default Slider;
