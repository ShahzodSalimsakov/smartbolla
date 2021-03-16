import CounterListMobile from  './CounterList.mobile'
import CounterListDesktop from  './CounterList.desktop'
import { isMobile } from "react-device-detect";

export default function CounterList({ counter }) {
  return (
    <>
      {isMobile ? (
        <CounterListMobile counter={counter} />
      ) : (
        <CounterListDesktop counter={counter} />
      )}
    </>
  );
}
