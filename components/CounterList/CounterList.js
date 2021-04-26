import CounterListMobile from "./CounterList.mobile";
import CounterListDesktop from "./CounterList.desktop";
import { deviceType, CustomView } from "react-device-detect";

export default function CounterList({ counter, countLang }) {
  return (
    <>
      <CustomView condition={!["browser", "tablet"].includes(deviceType)}>
        <CounterListMobile counter={counter} countLang={countLang} />
      </CustomView>
      <CustomView condition={["browser", "tablet"].includes(deviceType)}>
        <CounterListDesktop counter={counter} countLang={countLang} />
      </CustomView>
    </>
  );
}
