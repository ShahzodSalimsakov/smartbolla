import React, { useState, useCallback, useRef } from "react";
import { MainLayout } from "../../components/MainLayout";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MasonryScroller, useContainerPosition, usePositioner } from "masonic";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";
import { mediaCard } from "./media.module.css";

const photos = [];

const MasonryCard = ({ index, data, width }) => (
  <div className={mediaCard} style={{ height: data.PREVIEW_PICTURE.HEIGHT }}>
    <Image src={data.PREVIEW_PICTURE.SMALL} layout="fill" />
  </div>
);

function Media({ mainLayoutSocial, photoData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

  return (
    <>
      <MainLayout
        title={t("title")}
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
          items={photoData}
          overscanBy={6}
          render={MasonryCard}
        />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ locale }) {
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
