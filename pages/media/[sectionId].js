import React, { useState, useCallback, useRef } from "react";
import { MainLayout } from "../../components/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MasonryScroller, useContainerPosition, usePositioner } from "masonic";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";
import {
  mediaCard,
  mediaIsotopeItemsSections,
  mediaIsotopeItemsSections__item,
  mediaIsotopeItemsSections__item_active,
} from "./media.module.css";
import useKeypress from "../../hooks/useKeyPress";
import YouTube from "react-youtube";
import Link from "next/link";
import { useRouter } from "next/router";

const photos = [];

function Media({ mainLayoutSocial, photoData }) {
  const { t } = useTranslation("mediaPage");
  const commonLang = {
    about: t("about"),
    media: t("media"),
    contact: t("contact"),
    profile: t("profile"),
  };

  const footerLang = {
    allRightsRes: t("allRightsRes"),
    weWoldLike: t("weWoldLike"),
  };

  const containerRef = useRef(null);
  const [windowWidth, windowHeight] = useWindowSize();
  const { offset, width } = useContainerPosition(containerRef, [
    windowWidth,
    windowHeight,
  ]);
  const positioner = usePositioner({
    width,
    columnGutter: 8,
    columnWidth: 250,
  });
  const [currentModalItem, setCurrentModalItem] = useState(null);

  useKeypress("Escape", () => {
    setCurrentModalItem(null);
  });

  const MasonryCard = ({ index, data, width }) => (
    <div
      className={mediaCard}
      style={{ height: data.PREVIEW_PICTURE.HEIGHT }}
      onClick={() => {
        setCurrentModalItem(data);
      }}
    >
      <Image
        src={data.PREVIEW_PICTURE.SMALL}
        layout="fill"
        onClick={() => {
          setCurrentModalItem(data);
        }}
      />
    </div>
  );

  const youtubeOptions = {
    height: "400",
    width: "90%",
  };
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <>
      <MainLayout
        title="Media"
        commonLang={commonLang}
        footerLang={footerLang}
        mainLayoutSocial={mainLayoutSocial}
      >
        <MasonryScroller
          positioner={positioner}
          // The distance in px between the top of the document and the top of the
          // masonry grid container
          offset={offset}
          // The height of the virtualization window
          height={windowHeight}
          // Forwards the ref to the masonry container element
          containerRef={containerRef}
          items={photoData.ITEMS}
          overscanBy={6}
          render={MasonryCard}
        />
        {currentModalItem && (
          <div className="z-50 text-black fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div className="modal-container w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div
                onClick={() => {
                  setCurrentModalItem(null);
                }}
                className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
              >
                <svg
                  className="fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
                <span className="text-sm">(Esc)</span>
              </div>

              <div className="text-left">
                {currentModalItem.PROPERTY_VIDEO_LINK_VALUE && (
                  <YouTube
                    videoId={
                      currentModalItem.PROPERTY_VIDEO_LINK_VALUE.split("?v=")[1]
                    }
                    opts={youtubeOptions}
                    className="m-auto"
                  />
                )}
                {!currentModalItem.PROPERTY_VIDEO_LINK_VALUE && (
                  <img
                    src={currentModalItem.PREVIEW_PICTURE.BIG}
                    className="w-full"
                  />
                )}
              </div>
            </div>
          </div>
        )}
        <div className={mediaIsotopeItemsSections}>
          <div
            className={`${mediaIsotopeItemsSections__item} ${
              asPath == "/media/" && mediaIsotopeItemsSections__item_active
            }`}
          >
            <Link href="/media/">
              <span>All</span>
            </Link>
          </div>
          {photoData.SECTIONS.map((section) => (
            <div
              className={`${mediaIsotopeItemsSections__item} ${
                asPath == "/media/" + section.ID &&
                mediaIsotopeItemsSections__item_active
              }`}
              key={section.ID}
            >
              <Link href={`/media/${section.ID}`}>
                <span>{section.NAME}</span>
              </Link>
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ locale, query }) {
  const { sectionId } = query;
  const socials = await fetch("https://api.smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "social.links",
      data: {
        locale: locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  let { data: mainLayoutSocial } = await socials.json();

  const resPhoto = await fetch("https://api.smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.media.data",
      data: {
        locale: locale,
        sectionId,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  let { data: photoData } = await resPhoto.json();

  return {
    props: {
      mainLayoutSocial,
      photoData,
      ...(await serverSideTranslations(locale, ["aboutPage"])),
    },
  };
}

export default Media;