import ProjectMobile from "./Project.mobile";
import ProjectDesktop from "./Project.desktop";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

function Project({ project, onClick }) {
  return (
    <>
      {isMobile ? (
        <ProjectMobile project={project} onClick={onClick} />
      ) : (
        <ProjectDesktop project={project} />
      )}
    </>
  );
}

export default Project;
