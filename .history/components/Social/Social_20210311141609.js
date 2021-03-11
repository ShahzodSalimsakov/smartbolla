import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const SocialButtonsPage = () => {
  return (
    <ul className="fixed float-right right-3.5 top-1/3 w-6">
      <li className="pb-6">
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size="lg"
            className="text-white"
          />
        </a>
      </li>
      <li className="pb-6">
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="lg"
            className="text-white"
          />
        </a>
      </li>
      <li className="pb-6">
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "tiktok"]}
            size="lg"
            className="text-white"
          />
        </a>
      </li>
      <li className="pb-6">
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "telegram"]}
            size="lg"
            className="text-white"
          />
        </a>
      </li>
      <li className="pb-6">
        <a href="">
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            size="lg"
            className="text-white"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialButtonsPage;
