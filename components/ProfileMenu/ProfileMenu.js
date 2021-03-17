import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ProfileMenu.module.css";

function ProfileMenu({ balance, accountSetings, logOut }) {
  const router = useRouter();
  const { locale, pathname } = router;

  const navButtons = [
    {
      label: balance,
      path: "/profile",
    },
    {
      label: accountSetings,
      path: "/profile/account",
    },
    {
      label: logOut,
      path: "/",
    },
  ];
  return (
    <>
      <ul className={`${styles.ul} m-12 p-4 shadow sidebar-menu`}>
        {navButtons.map((button) => (
          <li className="p-2" key={button.label}>
            <Link href={`/${locale}${button.path}`}>
              <a
                  className={`${
                    pathname === button.path ? styles.isActive : ""
                  }`}>{button.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProfileMenu;
