import React from "react";
import "./Trending.css";
import Slider from "react-slick/lib/slider";
import { TRENDING_NFTS } from '../../data/trendingNFTs'
import TrendingCard from "./TrendingCard";
import Button from "../../common/Button";
const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: true,
 

};

function TrendNft() {
  return (
    <div className="trending_nft">
      <div className="tn-title absolute-center">
        <span className="heading-gradient">TRENDING_NFTs</span>
      </div>
      <div className="top_rgb_right_1"></div>
    <Slider {...settings}>
     {TRENDING_NFTS.map((_nft)=>(
      <TrendingCard nft={_nft} />
     ))}
    </Slider>
    <div className="tn-button absolute-center">
      <Button btnText="SEE MORE" type='Secondary'
      customClass='see-more-btn' />
    </div>
    </div>
  );
}

export default TrendNft;
