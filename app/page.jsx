import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="landing-frames">
      <div className="cabs-flex">
        <div className="header">
          <h2>
            Fleet <span>Wise</span>
          </h2>
        </div>
        <div className="deets-one">
          <h4>A WEB-APP FOR MANAGING YOUR</h4>
          <h4>TRANSPORT EMPIRE</h4>
        </div>
        <div className="cabs-flex-image">
          <Image src="" alt="cabs-image" width={450} height={200} />
        </div>
      </div>
      <div className="drivers-flex">
        <div className="drivers-flex-image">
          <Image src="" alt="drivers-image" width={450} height={200} />
        </div>
        <div className="deets-two">
          <h4>INFORMATION ON</h4>
          <h4>ALL YOUR</h4>
          <h4>
            <span>DRIVERS</span>
          </h4>
        </div>
      </div>
      <div className="relations-flex">
        <div className="top">
          <div className="deets-three">
            <h4>MANAGE YOUR BUSINESS SEAMLESSLY</h4>
          </div>
          <div className="relationships-flex-image">
            <Image src="" alt="relationships-image" />
          </div>
        </div>
        <div className="bottom">
          <div className="git-buttons">
            <div className="git-button">
              <Image src="" alt="git-image" />
              <a href=""></a>
            </div>
            <div className="git-button">
              <Image src="" alt="git-image" />
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
