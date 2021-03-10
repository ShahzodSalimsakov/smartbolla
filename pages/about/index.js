import { MainLayout } from "../../components/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import TeamPage from "../../components/TeamPage/TeamPage";

export default function About() {
  return (
    <MainLayout title={"About"}>
      <div className="font-extralight grid grid-cols-2">
        <div>
          <div className="text-2xl font-bold">About us:</div>
          <p>
            We are an international and innovative IT company, based in the UAE,
            Dubai, with our peculiar algorithm are going to revolutionize the
            field of technology, while bringing you huge conveniences in your
            life. We have been licensed by DMCC Free Zone which was established
            in 2002 by the Government of Dubai to provide the physical, market
            and financial infrastructure required to establish a hub for global
            commodities trade and businesses.
          </p>
          <div className="text-2xl font-bold">Our mission:</div>
          <p>
            We consist of 10 subsidiary companies, and one of our primary goals
            is to develop mobile applications with a collective audience of more
            than 100 000 000 users worldwide. We provide exceptional client
            services while upholding the highest professional standards. To make
            that possible, we have a team of talents who come from all over the
            world.
          </p>
          <div className="text-2xl font-bold">Your benefit:</div>
          <p>
            The special feature of the applications we are creating is that you
            can create both passive and active income while spending your time
            on the things you enjoy!
          </p>
        </div>
        <div>
          <div className="text-2xl font-bold">Documents:</div>
          <div className="flex pb-4">
            <FontAwesomeIcon icon={faFile} size="3x" />
            <div className="text-2xl m-1.5 pl-4">
              SmartBolla DMCC Registration certificate
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faFile} size="3x" />
            <div className="text-2xl m-1.5 pl-4">
              SmartBolla DMCC Service license
            </div>
          </div>
        </div>
      </div>
      <TeamPage />
    </MainLayout>
  );
}
