import styles from './footer.module.css';

export default function Footer() {
  let today = new Date()
  let year = today.getFullYear();
    return (
      <div
        className={`${styles.rotatedContentFooter} bottom-0 fixed text-white right-0 uppercase`}
      >
        <div>&copy; {year} Smartbolla. all rights reserved</div>
        <div className="flex">
          <div>We would like to hear from you</div>
          <a href="mailto:info@smartbolla.com"> info@smartbolla.com</a>
        </div>
      </div>
    );
}
