import { useEffect } from "react";
import BubbleUI from "react-bubble-ui";
import { useInView } from "react-intersection-observer";
import "react-bubble-ui/dist/index.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function InvestorNewBubble({ investors }) {
  const { ref, inView } = useInView();
  const router = useRouter();
  const options = {
    size: 180,
    minSize: 20,
    gutter: 0,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 8,
  };
  const children = investors.map((data, i) => {
    return (
      <div
        key={data.ID}
        className="child-block cursor-pointer"
        layoutId="investorPhoto"
      >
        <div
          className="child cursor-pointer"
          style={{ backgroundImage: `url(${data.PREVIEW_PICTURE})` }}
        ></div>
      </div>
    );
  });
  return (
    <>
      <div ref={ref}>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          {inView && (
            <BubbleUI options={options} className="myBubbleUI">
              {children}
            </BubbleUI>
          )}
        </motion.div>
      </div>
      <style jsx global>
        {`
          .myBubbleUI {
            width: 100%;
            max-width: 100vw;
            height: 80vh;
            border-radius: 50px;
          }
          .child-block {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-size: cover;
            transition: all 0.5s ease;
          }

          .child {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-size: cover;
            transition: all 0.5s ease;
          }
          .child:hover {
            transform: scale(1.2);
          }
        `}
      </style>
    </>
  );
}
