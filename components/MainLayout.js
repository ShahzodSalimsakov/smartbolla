import Link from "next/link";
import Head from "next/head";
import MainLeftSide from "./MainLeftSide/MainLeftSide";
import MainLeftLogo from "./MainLeftLogo/MainLeftLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { useSelector } from "react-redux";
import Lang from "./Lang/Lang";
import MainRightSide from "./MainRightSide/MainRightSide";
import styles from "./MainLayout.module.css";
import Social from "./Social/Social";
import { useRouter } from "next/router";
import Footer from "./Footer/Footer";
import FullPageSectionTitle from "./FullPageSectionTitle/FullPageSectionTitle";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export function MainLayout({ children, title = "", mainLayoutSocial, commonLang }) {
  const { backgroundColor } = useSelector((state) => state.mainConfig);
  const { pathname } = useRouter();
  return (
    <>
      <BrowserView>
        <Head>
          <title>{title}</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div
          style={{ background: backgroundColor }}
          className={`${pathname == "/" ? "flex flex-row" : ""}`}
        >
          <MainLeftSide className="fixed left-0 z-30">
            <div>
              <Link href="/">
                <a className="flex flex-row items-center">
                  <MainLeftLogo />
                  <div className="font-bold ml-3 text-white uppercase text-2x1">
                    SmartBolla
                  </div>
                </a>
              </Link>
            </div>
          </MainLeftSide>
          <MainRightSide className="fixed right-0.5 top-0 z-30">
            <header
              className={`${styles.header} ${
                pathname == "/" ? "" : styles.headerBack
              } flex flex-row items-end justify-between`}
            >
              <HeaderMenu commonLang={commonLang} />
              <Lang />
            </header>
          </MainRightSide>
          <div
            className={`main-content ${
              pathname == "/" ? "" : "py-24 pl-24 pr-10"
            }`}
          >
            {pathname !== "/" && <FullPageSectionTitle title={title} />}
            {children}
            {pathname != "/contacts" && (
              <Social mainLayoutSocial={mainLayoutSocial} />
            )}
          </div>
          <Footer />
        </div>
      </BrowserView>
      <MobileView>
        <MainRightSide className="fixed w-100 top-0 z-30">
          <header
            className={`${styles.header} flex flex-row items-end justify-around w-full`}
          >
            <Link href="/">
              <a className="flex flex-row items-center">
                <MainLeftLogo />
                <div className="font-bold ml-3 text-white uppercase text-2x1">
                  SmartBolla
                </div>
              </a>
            </Link>
            <Lang />
          </header>
        </MainRightSide>
        <div
          className={`main-content ${pathname == "/" ? "" : "pt-10"} ${
            pathname == "/contacts" ? "" : ""
          }`}
          style={{ background: backgroundColor }}
        >
          <div className="pl-10">
            {pathname !== "/" && <FullPageSectionTitle title={title} />}
          </div>
          {children}
          {pathname != "/contacts" && (
            <Social mainLayoutSocial={mainLayoutSocial} />
          )}
        </div>
        <Footer />
      </MobileView>
      <style jsx global>{`
        html,
        body {
          font-family: "Montserrat";
        }
      `}</style>
    </>
  );
}
