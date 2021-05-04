import Link from "next/link";
import styles from "./HeaderMenu.module.css";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function HeaderMenu({ commonLang }) {
  const navButtons = [
    {
      label: commonLang.about,
      path: "/about",
    },
    {
      label: commonLang.media,
      path: "/media",
    },
    {
      label: commonLang.contact,
      path: "/contacts",
    },
    {
      label: commonLang.profile,
      path: "/profile",
    },
    {
      label: commonLang.investors,
      path: "/investors",
    },
    {
      label: commonLang.policies,
      path: "/policies",
    },
  ];
  const { pathname } = useRouter();
  return (
    <>
      <nav className="h-full">
        <ul className="flex h-full flex-row">
          {navButtons.map((button) => (
            <li className={`${styles.headerMenuItem} h-full`} key={button.path}>
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
