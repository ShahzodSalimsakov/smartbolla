import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import styles from "./AboutPage.module.css";

export default function About({aboutText}) {
  return (
    <div className="font-extralight grid grid-cols-2">
      <div className={`${styles.aboutPageDivider} p-10`}>
        <div className="text-2xl mb-1.5">About us:</div>
        <div dangerouslySetInnerHTML={{__html: aboutText}}></div>
      </div>
      <div className="p-10">
        <div className="text-2xl pb-3">Documents:</div>
        <a
          href="https://smartbolla.com/upload/docs/Certificate_Registration.pdf"
          className="flex pb-4"
        >
          <FontAwesomeIcon icon={faFile} className="w-10 text-5xl" />
          <div className="text-2xl m-1.5 pl-4">
            SmartBolla DMCC Registration certificate
          </div>
        </a>
        <a
          href="https://smartbolla.com/upload/docs/Service_License.pdf"
          className="flex"
        >
          <FontAwesomeIcon icon={faFile} className="w-10 text-5xl" />
          <div className="text-2xl m-1.5 pl-4">
            SmartBolla DMCC Service license
          </div>
        </a>
      </div>
    </div>
  );
}
