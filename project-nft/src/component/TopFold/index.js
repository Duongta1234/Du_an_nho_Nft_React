import React from "react";
import Button from "../../common/Button";
import "./topFold.css";
const TopFold = () => {
  return (
    <div className="TopFold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect , & sell{" "}
          <span className="heading-gradient">Extraordinary</span>
          Nft
        </div>
        <div className="tf-description">
          Please make sure that you are buying and selling the most trending
          NFTs out there . Welcome to my channel Developer DuongCorden
        </div>
        <div className="tf-left-btn">
          <Button btnType="PRIMARY" btnText="Explore" />
          <Button
            id="secondary-btn"
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-inforStats">
          <div className="tf-is-inforItem absolute-center">
            <div className="tf-inforItem-Count">200K+</div>
            <div className="tf-inforItem-label">Collections</div>
          </div>
          <div className="tf-is-inforItem absolute-center">
            <div className="tf-inforItem-Count">10K+</div>
            <div className="tf-inforItem-label">Artists</div>
          </div>
          <div className="tf-is-inforItem absolute-center">
            <div className="tf-inforItem-Count">423K+</div>
            <div className="tf-inforItem-label">Community</div>
          </div>
        </div>
      </div>

      <div className="tf-right">
        <div className='top_rgb_right_1'></div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="image-right"
              src="https://lh3.googleusercontent.com/VK08Fp3Qwh7p3Q88SKtlq7ZwkfL0fKRKAqrx62pKOkv2HkKXAVc-LMHrqTuPlK151rIrS-BqPToKjeUQjnauKp3UsP24BsgbdSLyzA=w425"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="image-right"
              src="https://lh3.googleusercontent.com/lI8OheAFlZMh-F274HaTtxgZY1RMflaIjjoaUaZFpI1jOBY8cGnB8ltZ2XCEwaejPJEZ_PK8utlE1GW3ritQUUGnzndldrhPHbTTHQ=w425"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="image-right"
              src="https://lh3.googleusercontent.com/pkd9ZJkpE20b0Ylbye3dNwYOGilNwT3Hk6nSAouUJzJ0fyQ3OaRLhJKWq005sAIjjjAJZZQV_Oe5QYd2IGxN0xPUGXq62GDwiLFT=w425"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="image-right"
              src="https://lh3.googleusercontent.com/hfX1bEOM2IoJ0NsZWuFEw8xSJNA02eNsVoZf_Fuq4hClo7ayUIaNZpIc2xx2grNcKD5J5ApwCQXuzYKB25zXl6yalX3d13MTl7ZyVA=w425"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
