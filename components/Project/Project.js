import ProjectMobile from "./Project.mobile";
import ProjectDesktop from "./Project.desktop";
import { deviceType, CustomView } from "react-device-detect";

function Project({ project, onClick, onShowYoutube }) {
  return (
    <>
      <CustomView condition={!["browser", "tablet"].includes(deviceType)}>
        <ProjectMobile
          project={project}
          onClick={onClick}
          onShowYoutube={onShowYoutube}
        />
      </CustomView>

      <CustomView condition={["browser", "tablet"].includes(deviceType)}>
        <ProjectDesktop project={project} onShowYoutube={onShowYoutube} />
      </CustomView>
    </>
  );
}

export default Project;
