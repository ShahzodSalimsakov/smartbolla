import Link from 'next/Link'
import Head from 'next/head'
import MainLeftSide from './MainLeftSide/MainLeftSide';
import MainLeftLogo from "./MainLeftLogo/MainLeftLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import {useSelector} from "react-redux";
import Lang from "./Lang/Lang";
import MainRightSide from "./MainRightSide/MainRightSide";
import styles from './MainLayout.module.css'
import Social from "./Social/Social";


export function MainLayout({children, title = ''}) {
  const { backgroundColor } = useSelector(state => state.mainConfig);
  console.log(backgroundColor)
  return (
      <>
        <Head>
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <div style={{background: backgroundColor}} className="flex flex-row">
          <MainLeftSide>
            <div className="flex flex-row items-center">
              <MainLeftLogo />
              <div className="font-bold ml-3 text-white uppercase text-2x1">SmartBolla</div>
            </div>
          </MainLeftSide>
          <MainRightSide>
              <header className={`${styles.header} flex flex-row items-end justify-between`}>
                  <HeaderMenu />
                  <Lang />
              </header>
              <div className='p-10'>
                {children}
                <Social />
              </div>
              <footer>

              </footer>
          </MainRightSide>
        </div>
        <style jsx global>{`
            html,
            body {
                font-family: 'Montserrat';
            }
        `}</style>
      </>
  )
}