import FooterMobile from "./Footer.mobile";
import FooterDesktop from "./Footer.desktop";
import { isMobile } from "react-device-detect";

export default function Footer({ commonLang, footerLang }) {
  return <>{isMobile ? <FooterMobile commonLang={commonLang} /> : <FooterDesktop  footerLang={footerLang}/>}</>;
}
