import styles from "./footer.module.css";

export default function Footer({ footerLang }) {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div
      className={`${styles.footerbody} bottom-0 fixed text-white right-0 uppercase font-extralight`}
    >
      <div className="border-t flex">
        <p className="m-0 ml-auto mt-2 position-relative pr-10 text-gray-400">
          &copy; {year} Smartbolla. { footerLang.allRightsRes }
        </p>
      </div>
      <div className="border-t flex">
        <p className="m-0 mb-2 ml-auto pr-10 text-gray-400">
          { footerLang.weWoldLike }
          <a
            href="mailto:info@smartbolla.com"
            className="font-bold text-decoration-none text-gray-400"
          >
            {" "}
            info@smartbolla.com
          </a>
        </p>
      </div>
    </div>
  );
}
