import Link from "next/link";
import styles from './HeaderMenu.module.css'

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
  },
  {
    label: 'team',
    path: '/team',
  }
]

export default function HeaderMenu() {
  return (
      <>
        <nav>
          <ul className="flex flex-row">
            {
              navButtons.map(button => (
                  <li className={styles.headerMenuItem} key={button.label}>
                    <Link href={button.path} key={button.label}>
                      <a className='text-white uppercase mr-3'>
                        {button.label}
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
