import styles from "./Project.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import Image from "next/image";

library.add(faYoutube, faArrowLeft, faExpandAlt);

function Project({ project, onClick }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const [showYoutube, setshowYoutube] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const textBlock = {
    hidden: {
      x: -2000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const logoBlock = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: [0, 1.4, 1],
    },
  };

  const contentBoxVariants = {
    hidden: {
      width: ["90vw", "0vw"],
      opacity: [1, 0],
    },
    visible: {
      width: ["0vw", "90vw"],
      opacity: [0, 1],
    },
  };

  const youtubeBoxVariants = {
    hidden: {
      width: ["100vw", "0vw"],
      opacity: [1, 0],
    },
    visible: {
      width: ["0vw", "100vw"],
      opacity: [0, 1],
    },
  };

  const youtubeOptions = {
    height: "400",
    width: "90%",
  };

  return (
    <div
      ref={ref}
      className={`flex h-full ${showYoutube ? "" : "items-center"}`}
    >
      <div className={`absolute h-full ${styles.projectRandomObjects} w-full`}>
        {project.PROPERTY_PHOTOS &&
          project.PROPERTY_PHOTOS.map((img, i) => (
            <img
              key={i}
              src={img}
              style={{
                left: `${Math.floor(Math.random() * 80) + 1}%`,
                top: `${Math.floor(Math.random() * 80) + 1}%`,
              }}
            />
          ))}
      </div>
      <motion.div
        animate={showYoutube ? "hidden" : "visible"}
        variants={contentBoxVariants}
        transition={{ ease: "easeInOut" }}
      >
        <div key={project.ID} className="ml-3 w-10/12 text-xs">
          <motion.div initial="hidden" animate={controls} variants={logoBlock}>
            <div className="flex items-center h-full justify-around relative z-20">
              <img src={project.DETAIL_PICTURE} className="w-8/12 my-4" />
              {project.PROPERTY_YOUTUBE_LINK_VALUE && (
                <div className="absolute" onClick={() => setshowYoutube(true)}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="lg"
                    className={`cursor-pointer text-red-500 h-25 ${styles.youtubeLink}`}
                  />
                </div>
              )}
            </div>
          </motion.div>
          <div className="z-20 relative">
            <motion.div
              initial="hidden"
              transition={{ duration: 0.6 }}
              animate={controls}
              variants={textBlock}
            >
              <div>
                <div className={styles.textMobileBlock}>
                  <div
                    className="absolute m-3 right-0 top-0"
                    onClick={() => {
                      onClick(project);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faExpandAlt}
                      size="lg"
                      className={`cursor-pointer text-white h-25 ${styles.arrowLink}`}
                    />
                  </div>
                  <div className={styles.textSmallHeight}>
                    <h1 className="fa-2x font-extralight text-center">
                      {project.NAME}
                    </h1>
                    {project.PREVIEW_TEXT}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {project.PROPERTY_YOUTUBE_LINK_VALUE && (
        <motion.div
          animate={showYoutube ? "visible" : "hidden"}
          variants={youtubeBoxVariants}
          transition={{ ease: "easeInOut" }}
        >
          <div className="top-32 position-absolute w-5/6 z-20">
            <div
              className="cursor-pointer flex items-center pb-4 px-16"
              onClick={() => setshowYoutube(false)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="lg"
                className="mr-2 text-white w-5"
              />
              <span>Назад</span>
            </div>
            <YouTube
              videoId={project.PROPERTY_YOUTUBE_LINK_VALUE}
              opts={youtubeOptions}
              className="m-auto"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Project;
