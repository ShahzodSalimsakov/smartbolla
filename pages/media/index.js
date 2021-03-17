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
  return (
    <>
      <MainLayout commonLang={commonLang} mainLayoutSocial={mainLayoutSocial}>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
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
