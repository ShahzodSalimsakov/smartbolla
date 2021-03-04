import Link from "next/link";

export default function HeaderMenu() {
  return (
      <>
        {
          navButtons.map(button => (
              <Link href={button.path} key={button.label}>
                <a className='text-white uppercase mr-3'>
                  {button.label}
                </a>
              </Link>
          ))
        }
      </>
  )
}

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