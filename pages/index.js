import Link from "next/link";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainLayout } from "../components/MainLayout";
import InvestorsBubble from "../components/InvestorsBubble/InvestorsBubble";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeMainBackground } from "../store/actions/mainConfigActions";
import { motion } from "framer-motion";
import FullPageSectionTitle from "../components/FullPageSectionTitle/FullPageSectionTitle";
import Project from "../components/Project/Project";

const pluginWrapper = () => {
  require("../public/js/scrolloverflow.min");
};

function Home({ investors, projects }) {
  const dispatch = useDispatch();

  return (
    <MainLayout title={"Smartbolla"}>
      <ReactFullpage
        //fullpage options
        licenseKey={""}
        scrollingSpeed={1000} /* Options here */
        scrollOverflow={true}
        navigation={true}
        navigationPosition={"left"}
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        onLeave={(origin, destination, direction) => {
          // useEffect(() => {
          // dispatch(changeMainBackground("red"));
          // }, []);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper className="">
              <div className="section pl-24">
                <div className="flex">
                  <div className="flex h-100 items-center">
                    <motion.h1
                      initial={{ scale: [14, 1] }}
                      animate={{ scale: [1, 1] }}
                      transition={{ duration: 0.8, ease: "easeIn", delay: 2 }}
                    >
                      SmartBolla
                    </motion.h1>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="section pl-24 pt-20">
                <FullPageSectionTitle title="Investors" />
                {investors && <InvestorsBubble investors={investors} />}
              </div>
              {projects.map((project) => (
                <div className="section pl-24 pt-20">
                  <Project project={project} />
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <style jsx global>
        {`
          #fp-nav ul li a span,
          .fp-slidesNav ul li a span {
            background: transparent !important;
            border: 3px solid #fff !important;
            width: 12px !important;
            height: 12px !important;
            margin: -6px 0 0 -6px !important;
          }
          #fp-nav ul li a.active span,
          .fp-slidesNav ul li a.active span {
            background: #fff !important;
            border: 3px solid #fff !important;
          }
        `}
      </style>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.investor.list",
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const resProjects = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.projects.list",
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });


  let { data: investors } = await res.json();
  let { data: projects } = await resProjects.json();
  
  investors = investors || [];

  return {
    props: {
      investors,
      projects,
    },
  };
}

export default Home;
