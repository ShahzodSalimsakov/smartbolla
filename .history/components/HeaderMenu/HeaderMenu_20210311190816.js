import Link from "next/link";
import styles from './HeaderMenu.module.css'
import {useRouter} from "next/router";

const navButtons = [
  {
    label: 'projects',
    path: '/projects',
  },
  {
    label: 'about us',
    path: '/about',
  },
  {
    label: 'media',
    path: '/media',
  },
  {
    label: 'invest',
    path: '/invest',
  },
  {
    label: 'investors',
    path: '/investors',
  },
  {
    label: 'contacts',
    path: '/contacts',
  }
]

export default function HeaderMenu() {

  const { pathname } = useRouter();

  return (
      <>
        <nav className="h-full">
          <ul className="flex h-full flex-row">
            {
              navButtons.map(button => (
                  <li className={`${styles.headerMenuItem} h-full`} key={button.label}>
                    <Link href={button.path}>
                      <a className={`${(pathname === button.path ? 'is-active' : '')} text-white h-full items-end flex font-bold uppercase mr-3`}>
                        <span>{button.label}</span>
                      </a>
                    </Link>
                  </li>
              ))
            }
          </ul>
        </nav>
      </>
  )
}
