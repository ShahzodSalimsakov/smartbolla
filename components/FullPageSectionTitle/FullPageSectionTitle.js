import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./FullPageSectionTitle.module.css";
import styled from "styled-components";

export default function FullPageSectionTitle({ title }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const boxVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div ref={ref}>
      <motion.h1
        initial="hidden"
        transition={{ duration: 0.6 }}
        animate={controls}
        variants={boxVariants}
        className={`font-extrabold uppercase ${styles.title}`}
      >
        {title}
      </motion.h1>
      <motion.div
        initial="hidden"
        transition={{ duration: 0.6 }}
        animate={controls}
        variants={boxVariants}
        className={styles.fullPageSectionTitleUnderline}
      ></motion.div>
    </div>
  );
}
