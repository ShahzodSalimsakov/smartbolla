import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ProfileMenu.module.css";

function ProfileMenu({ balance, accountSetings, logOut }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <ul className={`${styles.ul} m-12 p-4 shadow sidebar-menu`}>
        <li className="p-2">
          <Link href={`/${locale}/profile/`}>
            <a>{balance}</a>
          </Link>
        </li>
        <li className="p-2">
          <Link href={`/${locale}/profile/account/`}>
            <a>{accountSetings}</a>
          </Link>
        </li>
        <li className="p-2">
          <Link href={`/${locale}/`}>
            <a>{logOut}</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default ProfileMenu;
