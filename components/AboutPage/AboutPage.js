import AboutPageMobile from "./AboutPage.mobile";
import AboutPageDesktop from "./AboutPage.desktop";
import { deviceType, CustomView } from "react-device-detect";

function About({ aboutText }) {
  return (
    <>
      <CustomView condition={!["browser", "tablet"].includes(deviceType)}>
        <AboutPageMobile aboutText={aboutText} />
      </CustomView>
      <CustomView condition={["browser", "tablet"].includes(deviceType)}>
        <AboutPageDesktop aboutText={aboutText} />
      </CustomView>
    </>
  );
}

export default About;
