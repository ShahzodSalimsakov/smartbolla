import AboutPageMobile from './AboutPage.mobile'
import AboutPageDesktop from './AboutPage.desktop'
import {
  isMobile
} from "react-device-detect";

function About({aboutText}) {
  return (
    <>
      {isMobile ? (
        <AboutPageMobile aboutText={aboutText} />
      ) : (
        <AboutPageDesktop aboutText={aboutText} />
      )}
    </>
  );
}

export default About