import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import "./homeMain.css";
import HomeProjectRight from './HomeProjectRight';
import HomeProjectLeft from './HomeProjectLeft';
import SponsorImgSlider from './SponsorImgSlider';
import HomeColoredHeader from './home_colored_header';
import HomeColoredHeader2 from './home_colored_header_2';
import HomeMobileIntro from './homeMobileIntro';
import HomeMobileProject from './HomeMobileProject';
import homepage_placeholder_lg from '../../assets/homepage_placeholder_lg.jpg';
import FooterCH from "../footer-ch";
import we_are_all_home_tor from '../../assets/we_are_all_home_van.jpg';
import apple_home from'../../assets/apple_home_van.jpg';
// import chinese_home from '../../assets/chinese_home_van.jpg';
import mirror_home_tor from '../../assets/mirror_home_van.jpg';
import otherside_tor from '../../assets/otherside_van.jpg';
import people_and_mask_tor from '../../assets/people_and_mask_van.jpg';
import sky_home_tor from '../../assets/sky_home_van.jpg';

function Home2() {
  var text = `世界的紛亂，可能是我們人 沒有給彼此空間；\n 大自然的抗議，可能是我們沒有跟它保持距離。\n 藝術家具有冒險的精神，挑戰現實的勇氣。\n文字無法傳達的，讓畫面來說話；\n 感受不到的溫度，讓顏色來點燃。\n在這裡欣賞藝術家的作品，唯一需要的是時間與空間`
    return (

        <div id="homeMainDiv">
        <Row id="homeFirstRow">
            <HomeTopSection/>
        </Row>
        <HomeMobileIntro/>
        <HomeSecondSection id="homeSecondSection" header={text}/>
        <div id="homeThirdSection">
          <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
          <img href= "" className="home_image"src={sky_home_tor} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={we_are_all_home_tor} style={{width:'100%', height:"auto"}}></img>
          {/*}<img className="home_image" src={chinese_home} style={{width:'100%', height:"auto"}}></img>*/}
          <img className="home_image" src={mirror_home_tor} style={{width:'100%', height:"auto"}}></img>

        <HomeColoredHeader2 title="口罩之說 " image={homepage_placeholder_lg}/>
          <img className="home_image" src={otherside_tor} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={apple_home} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={people_and_mask_tor} style={{width:'100%', height:"auto"}}></img>

          {/*}  <SponsorImgSlider id="sponsorSlider"/>*/}
        </div>
        <div id="homeThirdSectionMobile">
            <HomeColoredHeader title="我跟你的相同，就是我們都不同"/>
            <HomeMobileProject type="互動設計" title="頭頂同一片天計畫" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="互動設計" title="共同面對的我們" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="平面藝術" title="「趣」中國化" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="插畫創作" title="鏡子" image={homepage_placeholder_lg}/>
            <HomeColoredHeader title="口罩之說" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="創意藝術" title="一罩之隔" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="純藝術" title="保羅的蘋果" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="人像素描" title="傲慢與偏見"image={homepage_placeholder_lg}/>

        </div>
          <FooterCH></FooterCH>
        </div>
    )
}

export default Home2;
