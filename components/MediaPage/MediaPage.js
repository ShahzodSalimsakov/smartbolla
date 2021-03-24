import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import Link from "next/link";

const mediaData = [
  {
    id: 1,
    title: "New York City - Architecture",
    link: "/",
    previewPicture:
      "https://api.smartbolla.com/upload/iblock/152/152ce5a90f77090476a9780e18b47d62.JPG",
  },
  {
    id: 2,
    title: "Between two mountains",
    link: "/",
    previewPicture:
      "https://api.smartbolla.com/upload/iblock/abb/abbc0feee3cac32c701a5c9119e912ab.JPG",
  },
  {
    id: 3,
    title: "New York City - Architecture",
    link: "/",
    previewPicture:
      "https://api.smartbolla.com/upload/iblock/885/8850ce4f556ec26587cdf642eaea4ee3.png",
  },
];

const options = {
  settings: {
    overlayColor: "rgb(0 0 0 / 93%)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    hideControlsAfter: 1000,
  },
  buttons: {
    backgroundColor: "#808080",
    iconColor: "#333",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
  thumbnails: {
    showThumbnails: false,
  },
};

function MediaPage() {
  return (
    <>
      <SRLWrapper options={options}>
        <div id="content-page-one" className="content">
          <div className="row">
            {mediaData.map((img) => (
              <div className="col-md-6 col-12 col-image-half">
                <Link href={img.link}>
                  <Image
                    src={img.previewPicture}
                    alt={img.title}
                    width={500}
                    height={500}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default MediaPage;
