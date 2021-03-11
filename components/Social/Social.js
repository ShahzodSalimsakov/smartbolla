import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
      <div>
        <a href="#!" className="fb-ic mr-3 float-right d-block">
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href="#!" className="tw-ic mr-3 float-right d-block">
          <MDBIcon fab icon="twitter" />
        </a>
        <a href="#!" className="gplus-ic mr-3 float-right d-block">
          <MDBIcon fab icon="google-plus-g" />
        </a>
        <a href="#!" className="li-ic mr-3 float-right d-block">
          <MDBIcon fab icon="linkedin-in" />
        </a>
        <a href="#!" className="ins-ic mr-3 float-right d-block">
          <MDBIcon fab icon="instagram" />
        </a>
      </div>
  );
}

export default SocialButtonsPage;