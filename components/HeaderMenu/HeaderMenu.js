import Link from "next/link";
import styles from "./HeaderMenu.module.css";
import { useRouter } from "next/router";

export default function HeaderMenu({ commonLang }) {
  const navButtons = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Media",
      path: "/media",
    },
    {
      label: "Contacts",
      path: "/contacts",
    },
    {
      label: "Profile",
      path: "/profile",
    },
  ];
  const { pathname } = useRouter();
  return (
    <>
      <nav className="h-full">
        <ul className="flex h-full flex-row">
          {navButtons.map((button) => (
            <li
              className={`${styles.headerMenuItem} h-full`}
              key={button.label}
            >
              <Link href={button.path} prefetch={false}>
                <a
                  className={`${
                    pathname === button.path ? styles.isActive : ""
                  } text-decoration-none h-full items-end flex font-extralight uppercase mr-3`}
                >
                  <span>{button.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
