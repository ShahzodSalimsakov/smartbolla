import FooterMobile from "./Footer.mobile";
import FooterDesktop from "./Footer.desktop";
import { isMobile } from "react-device-detect";

export default function Footer() {
  return <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>;
}
