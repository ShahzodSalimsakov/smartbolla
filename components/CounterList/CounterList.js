import CounterListMobile from  './CounterList.mobile'
import CounterListDesktop from  './CounterList.desktop'
import { isMobile } from "react-device-detect";

export default function CounterList({ counter, countLang }) {
  return (
    <>
      {isMobile ? (
        <CounterListMobile counter={counter} countLang={countLang}/>
      ) : (
        <CounterListDesktop counter={counter} countLang={countLang}/>
      )}
    </>
  );
}
