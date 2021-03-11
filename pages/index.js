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

const pluginWrapper = () => {
  require("../public/js/scrolloverflow.min");
};

function Home({ investors }) {
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
              <div className="section pl-24 pt-20">
                <FullPageSectionTitle title="Investors" />
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section pl-24 pt-20">
                <FullPageSectionTitle title="Investors" />
                {investors && <InvestorsBubble investors={investors} />}
              </div>
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
  let { data: investors } = await res.json();

  investors = investors || [];

  return {
    props: {
      investors,
    },
  };
}

export default Home;
