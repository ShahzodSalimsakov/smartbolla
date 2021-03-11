import {MainLayout} from "../../components/MainLayout";
import MediaPage from "../../components/MediaPage/MediaPage";
import SimpleReactLightbox from "simple-react-lightbox";

function Media() {
  return (
    <MainLayout>
      <SimpleReactLightbox>
        <div className="App">
          <MediaPage />
        </div>
      </SimpleReactLightbox>
    </MainLayout>
  )
}

export default Media