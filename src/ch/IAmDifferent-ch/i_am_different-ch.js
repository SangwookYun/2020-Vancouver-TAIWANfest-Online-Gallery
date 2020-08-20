import React from "react";
import CardGame_ch from "./cardGame-ch";
import styled from "@emotion/styled";
import different_img from "../../assets/Different.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgramInfo_ch from "../programInfo-ch";
import "./i_am_different-ch.css";
import { Link } from "react-router-dom";
import FooterCH from "../footer-ch";
import Button2CH from "../../modules/ButtonChLong"
import Second_Title_ch from '../../modules/Second_TitleCh';
import MainContents_Important_ch from "../../modules/MainContents_Important_ch";
import MainContents_Middle_ch from "../../modules/MainContents_Middle_ch";
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border_two_bolder_ch from "../../modules/MainContents_Important_with_border_two_bold_ch"



function IAmDifferent() {
  const diffForm = <Link to="IAmDifferent"></Link>;


  const goToForm=()=> {
      window.location='/IAmDifferentForm-ch';
  };

  let Body = styled.div`
    text-align: center;
  `;
  let GameDiv = styled.div`
    width: 100%;
    // min-height: 250px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
  `;
  var text=`若世界以專業領域、社會貢獻的成就來對待每一個人，給予每個人付出後應得的尊重；人們不再以膚色外表、出身背景評斷、喜惡他人，是否才能真正地將每個人當作獨立的個人看待?

我們希望從台灣文化節發起 "I’m different, just like you." (我跟你的相同，就是我們都不同) 運動，蒐集與展示醫護人員、警消人員、科學家、衛生官員的照片，不僅向抗疫英雄致敬，也邀請大家一起參與、呼籲欣賞每個人與眾不同的美，為我們信仰人生而平等的理念喝采。「不同」代表著我們都是獨立的個體；「相同」意謂我們擁有共通的情感，肯定生而為人的人性價值。為我們的不同感到驕傲，為我們的相同愛惜彼此 !

上傳照片的民眾，不僅可能在台灣文化節網站看到自己、親友或世界各地相同職業人士的照片，還能在我們的網站上進行影像互動體驗，一起邀更多朋友響應 "I’m different, just like you."

8/28起，上傳照片的朋友，可以在網站上，看到自己分享的照片，以及體驗影像互動遊戲!`

var instruction1 = `此互動作品是由這次疫情中保護我們的前線作業人員一起完成的互動遊戲，讓我們好好的認識他們！遊戲的問題在左上方，請滑鼠點擊圖片並找出職業相同的前線人員們。
`
  return (
    <div>
      <Container fluid>
        <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
        </Row>
        <ProgramInfo_ch
          subtitle="我跟你的相同，就是我們都不同 "
          title="共同面對的我們"
          artistName="台灣文化節"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FIAmDifferent-ch&amp;src=sdkpreparse"
          color="#246f79"
        ></ProgramInfo_ch>

        <Second_Title_ch secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title_ch>
          <MainContents_Important_With_Border_two_bolder_ch  style={{color:"#0C3866"}} bold="桌機: " contents={instruction1}
          bold2="手機/平板: " contents2="互動作品必須使用桌機電腦觀看，手機與平板介面請點擊左右兩邊的圓點觀看照片。"></MainContents_Important_With_Border_two_bolder_ch>


        <Second_Title_ch secondTitle="影像創作 X 線上互動"></Second_Title_ch>

        <MainContents_Important_ch contents="在疫情最辛苦艱難的時期，許多生命受苦臨危之際，醫護人員、警消人員、科學家、衛生官員這些專業人士，在拯救生命的同時，並不會過問危難者的族裔與身份。我們每一個人都會面臨生命終結的一天，當這些專業人士在救助受苦的人們，處理危急的情況當下，並不會過問對方的膚色族裔、語言文化、社經地位，那時，他們的眼中視一切生命皆為平等，不因求助者的外在條件、理想價值而有所不同。"></MainContents_Important_ch>
        <Row className="space_ch_imd"><Col></Col></Row>
        <MainContents_Middle_Adonis font="adonis-web" contents={text}></MainContents_Middle_Adonis>
        {/*}<MainContents_Middle_ch contents="若世界以專業領域、社會貢獻的成就來對待每一個人，給予每個人付出後應得的尊重；人們不再以膚色外表、出身背景評斷、喜惡他人，是否才能真正地將每個人當作獨立的個人看待?"></MainContents_Middle_ch>
        <MainContents_Middle_ch contents='我們希望從台灣文化節發起 "I’m different, just like you." (我跟你的相同，就是我們都不同) 運動，蒐集與展示醫護人員、警消人員、科學家、衛生官員的照片，不僅向抗疫英雄致敬，也邀請大家一起參與、呼籲欣賞每個人與眾不同的美，為我們信仰人生而平等的理念喝采。「不同」代表著我們都是獨立的個體；「相同」意謂我們擁有共通的情感，肯定生而為人的人性價值。為我們的不同感到驕傲，為我們的相同愛惜彼此 !'></MainContents_Middle_ch>
        <MainContents_Middle_ch contents='上傳照片的民眾，不僅可能在台灣文化節網站看到自己、親友或世界各地相同職業人士的照片，還能在我們的網站上進行影像互動體驗，一起邀更多朋友響應 "I’m different, just like you."'></MainContents_Middle_ch>
        <MainContents_Middle_ch contents='8/28起，上傳照片的朋友，可以在網站上，看到自己分享的照片，以及體驗影像互動遊戲!'></MainContents_Middle_ch>*/}

        <Button2CH onclick={goToForm} title="上傳照片" togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FIAmDifferent-ch&amp;src=sdkpreparse" ></Button2CH>

      </Container>
      <div
        lg={{ span: 3, offset: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
          alignItems: "center",
        }}
      >
      </div>

      <FooterCH/>
       </div>
  );
}

export default IAmDifferent;
