import SliderMobile from "./Slider.mobile";
import SliderDesktop from "./Slider.desktop";
import { deviceType, CustomView } from "react-device-detect";
import { useRouter } from "next/router";

function Slider({ slides }) {
  const router = useRouter();
  const locale = router.locale.toUpperCase();
  return (
    <>
      <CustomView condition={!["browser", "tablet"].includes(deviceType)}>
        <SliderMobile slides={slides} locale={locale} />
      </CustomView>
      <CustomView condition={["browser", "tablet"].includes(deviceType)}>
        <SliderDesktop slides={slides} locale={locale} />
      </CustomView>
    </>
  );
}

export default Slider;
