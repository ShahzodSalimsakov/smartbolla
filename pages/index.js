import Link from "next/link";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainLayout } from "../components/MainLayout";
import InvestorsBubble from "../components/InvestorsBubble/InvestorsBubble";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMainBackground } from "../store/actions/mainConfigActions";
import { motion } from "framer-motion";
import FullPageSectionTitle from "../components/FullPageSectionTitle/FullPageSectionTitle";
import InvestorNewBubble from "../components/InvestorNewBubble/InvestorNewBubble";
import Project from "../components/Project/Project";
import CounterList from "../components/CounterList/CounterList";
import ProductsSlider from "../components/ProductsSlider/ProductsSlider";
import Slider from "../components/Slider/Slider";
import Image from "next/image";

const pluginWrapper = () => {
  require("../public/js/scrolloverflow.min");
};

function Home({ investors, projects, counter, products, cofounder }) {
  const dispatch = useDispatch();

  const sectionsColor = ["#000000", "#6135863d"];

  projects.map((project) => {
    if (project.PROPERTY_BACKGROUND_COLOR_VALUE) {
      sectionsColor.push(project.PROPERTY_BACKGROUND_COLOR_VALUE);
    } else {
      sectionsColor.push("#152331");
    }
  });

  return (
    <>
      <MainLayout title={"Smartbolla"}>
        <ReactFullpage
          //fullpage options
          licenseKey={""}
          scrollingSpeed={1000} /* Options here */
          navigation={true}
          navigationPosition={"left"}
          sectionsColor={sectionsColor}
          onLeave={(origin, destination, direction) => {}}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper className="">
                <div className="section pl-24">
                  <div className="flex h-full items-center">
                    <div className="grid grid-cols-2 h-full w-full pt-20">
                      <div className="flex h-100 items-center">
                        <div className="absolute h-5/6 left-0 w-9/12 w-90 z-10">
                          <Image src="/img/portrait.webp" layout="fill" />
                        </div>
                        <div className="absolute bg-black bottom-0 jsx-1377087279 p-4 w-2/4 z-20">
                          <h1 className="font-black uppercase">Your time.</h1>
                          <h1 className="font-black uppercase">Your goals.</h1>
                          <h1 className="font-black uppercase">
                            Your are the boss.
                          </h1>
                          <span>Invest in your future</span>
                        </div>
                      </div>
                      <div className="flex h-100 items-center z-20 justify-around">
                        <ProductsSlider products={products} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section pl-24 pt-14">
                  <FullPageSectionTitle title="Investors" />
                  <div className="w-10/12 m-auto">
                    <Slider slides={investors} />
                  </div>
                  <FullPageSectionTitle title="Co-founders" />
                  <div className="w-10/12 m-auto">
                    <Slider slides={cofounder} />
                  </div>
                </div>
                {projects.map((project) => (
                  <div className="section pl-24 pt-20" key={project.ID}>
                    <Project project={project} />
                  </div>
                ))}
                <div className="section pl-24 pt-20">
                  <CounterList counter={counter} />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <style jsx global>
          {`
            #fp-nav {
              top: 65% !important;
            }
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

            .ct-btn-scroll {
              position: absolute;
              top: 20%;
              right: 10%;
              z-index: 2;
              display: inline-block;
              -webkit-transform: translate(0, -50%);
              transform: translate(0, -50%);
              color: #fff;
              font: normal 400 20px/1 "Josefin Sans", sans-serif;
              letter-spacing: 0.1em;
              text-decoration: none;
              transition: opacity 0.3s;
            }
            .ct-btn-scroll span {
              position: absolute;
              top: 0;
              left: 50%;
              width: 24px;
              height: 24px;
              margin-left: -12px;
              border-left: 2px solid #fff;
              border-bottom: 2px solid #fff;
              -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
              -webkit-animation: sdb07 2s infinite;
              animation: sdb07 2s infinite;
              opacity: 0;
              box-sizing: border-box;
            }
            .ct-btn-scroll span:nth-of-type(1) {
              -webkit-animation-delay: 0s;
              animation-delay: 0s;
            }
            .ct-btn-scroll span:nth-of-type(2) {
              top: 16px;
              -webkit-animation-delay: 0.15s;
              animation-delay: 0.15s;
            }
            .ct-btn-scroll span:nth-of-type(3) {
              top: 32px;
              -webkit-animation-delay: 0.3s;
              animation-delay: 0.3s;
            }

            .ct-btn-scroll-top {
              transform: rotate(180deg);
              top: 25%;
            }
            .ct-btn-scroll-bottom {
              top: 75%;
            }

            @-webkit-keyframes sdb07 {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
            @keyframes sdb07 {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}
        </style>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ locale }) {
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
      data: {
        locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const resCounter = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.counter.list",
      data: {
        locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const resProducts = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.products.list",
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const resCoFounder = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.cofounder.list",
      data: {
        locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });
  console.log(resProducts);
  let { data: investors } = await res.json();
  let { data: projects } = await resProjects.json();
  let { data: counter } = await resCounter.json();
  let { data: products } = await resProducts.json();
  let { data: cofounder } = await resCoFounder.json();

  investors = investors || [];

  return {
    props: {
      investors,
      projects,
      counter,
      products,
      cofounder,
    },
  };
}

export default Home;
