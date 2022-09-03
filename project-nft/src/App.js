import React from "react";
import "./App.css";
import Head from "./component/Head";
import Footer from "./component/Footer";
import Trending from "./component/TrendingNft";
import TopFold from "./component/TopFold";
import Brand from "./component/Brand";
import InforSections from "./component/InforSection";
function App() {
  return (
    <div className ="max-width">
      <Head />
      <TopFold />
      <Brand />
      <Trending />
      <InforSections />
      <Footer />
    </div>
  );
}

export default App;
