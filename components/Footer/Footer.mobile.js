import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoVideo,
  faMapMarkerAlt,
  faUser,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "about us",
    path: "/about",
    icon: faAddressCard,
  },
  {
    label: "media",
    path: "/media",
    icon: faPhotoVideo,
  },
  {
    label: "contacts",
    path: "/contacts",
    icon: faMapMarkerAlt,
  },
  {
    label: "profile",
    path: "/profile",
    icon: faUser,
  },
];

export default function Footer() {
  const { pathname } = useRouter();
  return (
    <div
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 shadow bg-black"
      style={{
        background: "linear-gradient(270deg, #0C0E12 0.14%, #242C40 100%)",
      }}
    >
      <div id="tabs" className="flex justify-around">
        {navButtons.map((button) => (
          <Link href={button.path}>
            <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 text-decoration-none">
              <FontAwesomeIcon
                icon={button.icon}
                className={`${
                  pathname === button.path
                    ? "text-warning"
                    : "text-white"
                }`}
              />
              <span className="tab tab-whishlist block text-white text-xs">
                {button.label}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
