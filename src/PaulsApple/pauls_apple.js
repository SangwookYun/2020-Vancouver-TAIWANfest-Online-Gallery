import React from 'react';
import ReactCompareImage from 'react-compare-image';
import image1 from '../assets/paulsapples1.jpg';
import image2 from '../assets/paulsapples2.jpg';
import ProgramInfo from '../programInfo';
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import MainContents_Img from "../modules/MainContents_img"
import Footer from "../footer-temp";
import MobileShareButton from "../modules/mobileShareButton";
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
import './pauls_apple.css'
import ladyhaohao from '../assets/Lady Hao Hao.jpg'
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_OneArtist2 from "../modules/MainContents_OneArtist2"
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

function PaulsApple() {
  var text =`I am convinced that I am more powerful than the painters around me. I am not just saying it casually, but from the sincere feelings in my heart. For me, painting is not just to pursue a perfect image on the surface, but through a non-written creation, to express the absolute and truth behind perfection. These are the feelings expressed in Cezanne's letter to his mother.

The still life paintings of Paul Cezanne, the father of modern painting, created a visual balance and harmony of three-dimensional structure and color, light, shade, and reality. The artist's still life paintings have brought such precious creations to the world. Behind the priceless artworks, it implores us to see the "absolute" and "truth" behind perfection.

While mankind pursued fame and wealth, nature has been inadvertently destroyed. When people have not yet escaped the shadow of the pandemic, where will blind pursuit and desire lead us? Has nature’s pure way of life been tainted or does it still exist? In ignoring the reality that perfect apples left uneaten eventually rot, there is a contradiction in choosing the pleasure of drinking, over the need to protect others by using masks. In humankind’s current state of existence experiencing this challenge set by nature, does the creation of culture still have meaning?

The original Latin text of the still life painting is "Vanitas," in English it means Vanity. Lady Hao Hao, who has learned to create in a variety of non-native languages, wants to see within the art of the masters, the significance shown in the reflection of before and after survival. "The world is so grandiose and short. We, as humans, are but mortal."
`

var text2=`A Taiwanese artist who immigrated to Canada during her high school years, but her home stay wouldn’t allow to draw or paint in Canada. She soon returned to Taiwan to pursue those desires. After she graduated from university in Taiwan, she returned to Canada to absorb the essence of this diverse land.

Art has always been her pride and joy and feeds her spirit. For her, creativity is like asking herself reflective questions and answering them in the process of self-discovery. In recent years, she has been curious about “installation art” and also experiencing the diverse communities in Canada, learning the creative thinking of experts, and accumulating her own creations. Each time she releases a piece, we see “echoes”, “discussions”, “emotions” and “habits” between art and people, exploring and dancing with diversity.`

  return (
    <div>
      <Container fluid style={{padding:"0"}}>
        <div className="compare_slider_desktop">
          <ReactCompareImage
            leftImage={image1}
            rightImage={image2}
            vertical={true}
            sliderPositionPercentage="0.92"
          />
        </div>
        <div className="compare_slider_mobile">
        <ReactCompareImage
            leftImage={image1}
            rightImage={image2}
            sliderPositionPercentage="0.9"
          />
      </div>

        <ProgramInfo
          subtitle="Behind the Masks"
          title="PAUL'S APPLES"
          artistName=" Artist: Lady Hao Hao"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FPaulsApple&amp;src=sdkpreparse"
          color="#246f79"
        ></ProgramInfo>

        <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <MainContents_Important_With_Border contents="Click and drag the bar in the middle to see the difference."></MainContents_Important_With_Border>

          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
                        </MainContents_Middle_Adonis>
        <MainContents_OneArtist2 src={ladyhaohao} title="Lady Hao Hao" contents={text2}></MainContents_OneArtist2>
          <div className="media_col">
          <Row >
              <Col className="SA_artistInfo" xl={{span:10, offset:2}} lg={{span:10, offset:2}} md={{span:1, offset:1}} sm={{ span:1, offset:1}} xs={{span:1, offset:1}}>
                <span className="SA_artistInfo">ARTIST INFO:</span>
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="mailto" url="mailto:theladyhaohao@gmail.com"/>
                </Col>
            </Row>
        </div>
          <div className="media_col2">
              <Row >
                <Col className="SA_artistInfo2" xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}>
                  <span className="SA_artistInfo2">ARTIST INFO:</span>
                  </Col>
              </Row>
              <Row>
                <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}>
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="mailto" url="mailto:theladyhaohao@gmail.com"/>
                </Col>
              </Row>
              </div>
                          <div className="people_padding"></div>

        <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FPaulsApple&amp;src=sdkpreparse" ></MobileShareButton>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default PaulsApple;
