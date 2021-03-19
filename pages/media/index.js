import React, { useState, useCallback } from "react";
import { MainLayout } from "../../components/MainLayout";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const photos = [];

function Media({mainLayoutSocial}) {
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

  const { t } = useTranslation('mediaPage');
  const commonLang = {
    about: t('about'),
    media: t('media'),
    contact: t('contact'),
    profile: t('profile'),
  }
  
  const footerLang = {
    allRightsRes: t('allRightsRes'),
    weWoldLike: t("weWoldLike")
  }

  const photos = [
    { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
  ];

  return (
    <>
      <MainLayout title={t('title')} commonLang={commonLang} footerLang={footerLang} mainLayoutSocial={mainLayoutSocial}>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <a data-fancybox data-options='{"caption" : "My caption", "src" : "https://codepen.io/about/", "type" : "iframe"}' href="javascript:;" class="btn btn-primary">
              Example #1
          </a>

          <a data-fancybox data-animation-effect="false" href="https://source.unsplash.com/0JYgd2QuMfw/1500x1000" class="btn btn-primary">
              Example #2
          </a>
        </div>
      </MainLayout>
    </>
  );
}


export async function getServerSideProps({ locale }) {

  const socials = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "social.links",
      data: {
        locale: locale,
      }
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  let { data: mainLayoutSocial, } = await socials.json();

  return {
    props: {
      mainLayoutSocial,
      ...await serverSideTranslations(locale, ['aboutPage']),
    },
  };
}

export default Media;
