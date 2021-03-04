import Link from 'next/Link'
import Head from 'next/head'
import MainLeftSide from './MainLeftSide/MainLeftSide';
import MainLeftLogo from "./MainLeftLogo/MainLeftLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import {useSelector} from "react-redux";
import Lang from "./Lang/Lang";


export function MainLayout({children, title = ''}) {
  const { backgroundColor } = useSelector(state => state.mainConfig);
  console.log(backgroundColor)
  return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div style={{background: backgroundColor}}>
          <HeaderMenu />
          <Lang />
          <MainLeftSide>
            <div className="flex flex-row items-center">
              <MainLeftLogo />
              <div className="font-bold ml-3 text-white uppercase text-2x1">SmartBolla</div>
            </div>
          </MainLeftSide>
          <div className="content">
          </div>
          <header>
          </header>
          <main>{children}</main>
        </div>
      </>
  )
}