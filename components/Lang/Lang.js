import LangMobile from "./Lang.mobile.js";
import LangDesktop from "./Lang.desktop.js";
import { isBrowser, isMobile } from "react-device-detect";

export default function Lang() {
  return <>{isMobile ? <LangMobile /> : <LangDesktop />}</>;
}
