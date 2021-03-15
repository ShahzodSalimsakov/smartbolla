import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

library.add(faFacebook, faInstagram, faTiktok, faTelegram, faYoutube);

const SocialButtonsPage = () => {
  return (
    <motion.ul
      transition={{
        staggerChildren: 0.1,
        duration: 0.6,
      }}
      className="fixed float-right right-3.5 top-1/3 w-6"
    >
      <motion.li
        animate={{
          x: [100, 0, -10, 0],
        }}
        className="pb-6"
      >
        <a href="">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="text-white" />
        </a>
      </motion.li>
      <motion.li
        animate={{
          x: [100, 0, -10, 0],
        }}
        transition={{
          delay: 0.1,
        }}
        className="pb-6"
      >
        <a href="">
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="text-white"
          />
        </a>
      </motion.li>
      <motion.li
        animate={{
          x: [100, 0, -10, 0],
        }}
        transition={{
          delay: 0.2,
        }}
        className="pb-6"
      >
        <a href="">
          <FontAwesomeIcon icon={faTiktok} size="lg" className="text-white" />
        </a>
      </motion.li>
      <motion.li
        animate={{
          x: [100, 0, -10, 0],
        }}
        transition={{
          delay: 0.3,
        }}
        className="pb-6"
      >
        <a href="">
          <FontAwesomeIcon icon={faTelegram} size="lg" className="text-white" />
        </a>
      </motion.li>
      <motion.li
        animate={{
          x: [100, 0, -10, 0],
        }}
        transition={{
          delay: 0.4,
        }}
        className="pb-6"
      >
        <a href="">
          <FontAwesomeIcon icon={faYoutube} size="lg" className="text-white" />
        </a>
      </motion.li>
    </motion.ul>
  );
};

export default SocialButtonsPage;
