import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import styles from "/AboutPage.module.css";

export default function About() {
  return (
    <div className="font-extralight grid grid-cols-2">
      <div className={styles.about-page-divider}>
        <div className="text-2xl mb-1.5">About us:</div>
        <p>
          We are an international and innovative IT company, based in the UAE,
          Dubai, with our peculiar algorithm are going to revolutionize the
          field of technology, while bringing you huge conveniences in your
          life. We have been licensed by DMCC Free Zone which was established in
          2002 by the Government of Dubai to provide the physical, market and
          financial infrastructure required to establish a hub for global
          commodities trade and businesses.
        </p>
        <div className="text-2xl mb-1.5">Our mission:</div>
        <p>
          We consist of 10 subsidiary companies, and one of our primary goals is
          to develop mobile applications with a collective audience of more than
          100 000 000 users worldwide. We provide exceptional client services
          while upholding the highest professional standards. To make that
          possible, we have a team of talents who come from all over the world.
        </p>
        <div className="text-2xl mb-1.5">Your benefit:</div>
        <p>
          The special feature of the applications we are creating is that you
          can create both passive and active income while spending your time on
          the things you enjoy!
        </p>
      </div>
      <div className="border-l h-1/3 left-1/2 ml-14 position-absolute top-1/4"></div>
      <div className="p-20">
        <div className="text-2xl pb-3">Documents:</div>
        <a
          href="https://smartbolla.com/upload/docs/Certificate_Registration.pdf"
          className="flex pb-4"
        >
          <FontAwesomeIcon icon={faFile} className="w-10" />
          <div className="text-2xl m-1.5 pl-4">
            SmartBolla DMCC Registration certificate
          </div>
        </a>
        <a
          href="https://smartbolla.com/upload/docs/Service_License.pdf"
          className="flex"
        >
          <FontAwesomeIcon icon={faFile} className="w-10" />
          <div className="text-2xl m-1.5 pl-4">
            SmartBolla DMCC Service license
          </div>
        </a>
      </div>
    </div>
  );
}
