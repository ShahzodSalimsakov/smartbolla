import styles from "./footer.module.css";

export default function Footer() {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div
      className={`${styles.footerbody} bottom-0 fixed text-white right-0 uppercase font-extralight`}
    >
      <div className="border-t mb-10">
        <p className="float-right mr-16 text-gray-400">
          &copy; {year} Smartbolla. all rights reserved
        </p>
      </div>
      <div className="border-t">
        <p className="float-right mr-16 text-gray-400">
          We would like to hear from you
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
