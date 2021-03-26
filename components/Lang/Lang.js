import LangMobile from "./Lang.mobile.js";
import LangDesktop from "./Lang.desktop.js";
import { deviceType, CustomView } from "react-device-detect";

export default function Lang() {
  return (
    <>
      <CustomView condition={!["browser", "tablet"].includes(deviceType)}>
        <LangMobile />
      </CustomView>
      <CustomView condition={["browser", "tablet"].includes(deviceType)}>
        <LangDesktop />
      </CustomView>
    </>
  );
}
