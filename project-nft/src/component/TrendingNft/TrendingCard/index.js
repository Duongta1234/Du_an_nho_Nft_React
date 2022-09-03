import React from "react";
import "./TrendingCard.css";
const TrendingCard = (props) => {
  const { nft } = props;
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.banner} className="tc-banner" />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                alt={nft.user_name}
                src={nft.user_logo}
                className="tc-user-logos"
              />
              <div>
                <div className="tc-ui-user_name">{nft.user_name}</div>
                <div className="tc-ui-user-handles">{nft.userhandle}</div>
              </div>
            </div>
            <img
              className="tc-solana "
              src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
