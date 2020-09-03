import React from 'react';
import {Component} from 'react';
// import ButtonSkinColor from './mirror/ButtonSkinColor';
import './Mirror.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from'@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import image1 from '../assets/image1.jpg';
import ProgramInfo from "../programInfo";
import Second_Title from "../modules/Second_Title"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import Footer from '../footer-temp';
import MobileShareButton from "../modules/mobileShareButton";
import MainContents_img from "../modules/MainContents_img";
import doctor from "../assets/doctor.jpg";
import firefighter from "../assets/firefighter.jpg";
import MainContetn_TwoPic from "../modules/MainContent_TwoPic";
import MirrorBird from "./mirrorBird"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border_two_bolder from "../modules/MainContents_Important_with_border_two_bold"
import MainContents_OneArtist2 from "../modules/MainContents_OneArtist2"
import mina from '../assets/人物照-Mina.jpg'
import Slider from './img_slider_final_mirror'
import slide1 from '../assets/artist_taiwan_color.jpg';
import slide2 from '../assets/doctor.jpg';
import slide3 from '../assets/firefighter.jpg'
import slide4 from '../assets/dancer.jpg'
import slide10 from '../assets/child.jpg'
import { SocialIcon } from 'react-social-icons';



class Mirror extends Component {

    render() {
      var text = `Like everything that is part of nature, skin is a gift people are given, and the colour tones are influenced by the places we lived, the sunlight we received or the weather we got. Differences in skin colour offer a convenient way to see people. Since when, did people turn these natural protectors into weapons to harm others?

Follow the pigeon within the paintings as it travels through our everyday life. Picasso once used pigeons in his works to express people's longing for peace. Equality shouldn’t be so difficult to achieve because it is just like the air we can’t breath without. “I’m different, just like you.” Our differences are what make us all unique.

Yen-Chun Lu of Taiwan uses the reflections of mirrors to show the sceneries and the stories that we might take for granted as we hope to connect and reflect on those often forgotten realities. When what has been hidden in the reflection of the mirror can no longer be hidden, any attempt to cover it up can make a conscious person feel distorted or isolated. No one wants to feel left out or alone, regardless of the intention behind it.

An island in the middle of the ocean could be deemed insignificant or easily sacrificed as the world chases all things big and fast; when people are left with a moment to re-examine their past behaviours, they can finally discover that the island’s importance and beauty had been greatly ignored or overlooked.
`
var images = [slide1, slide2, slide3, slide4, slide10]

var text2 = `A professional paper artist, known for her simplified but sophisticated and creative crafts. She recently curated the exhibition to showcase the profound bond between the local farmers in Taiwan and the land itself, as well as the relationship between food and the natural environment, allowing people to reflect and be aware of the way we eat in order to drive change.

Inspired by the Pop-Up Tunnel book, she has used her talents to build “the way back home to Gongliao" as a reflection of herself, nature and the land.  She has also participated in various events, such as World Food Day and Citizen of the Earth, Taiwan alongside her crafts.  She believes that art has the power to unite everyone, and utilizes talents to make a contribution to society.

It is not difficult to discern how her beloved Taiwan influences her works.  She values the land she grew up in, and uses her creations to find the connections and similarities between Taiwan and Canada.
`

        return (
            <div className='mirror'>

            <Container fluid>
                <MirrorBird></MirrorBird>
                <Slider className="test" images={images}></Slider>

            <ProgramInfo
              id="test"
              subtitle="Illustration"
              title="Mirrors"
              artistName="Artist: Yen-Chun Lu"
              url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FMirror&amp;src=sdkpreparse"
              color="#246f79"/>
            <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
            <MainContents_Important_With_Border_two_bolder  style={{color:"#0C3866"}} bold="Desktop: " contents=" There are a total of 5 pictures. Click on the picture to discover the messages that the artist is trying to convey. If you answer correctly, a joyful melody will be played. If you answer incorrectly, the “view artworks again” button will flash along with an error sound."
            bold2="Mobile / Tablet: " contents2="There are a total of 5 pictures. To view the animations, please use a laptop with your browser maximized. For tablets and phones, please click on the dots on either side of the screen to navigate between drawings."></MainContents_Important_With_Border_two_bolder>


              <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
              </MainContents_Middle_Adonis>
              <MainContents_OneArtist2 src={mina} title="Yen-Chun Lu" contents={text2}></MainContents_OneArtist2>
                <div className="media_col">
                <Row >
                    <Col className="SA_artistInfo" xl={{span:10, offset:2}} lg={{span:10, offset:2}} md={{span:1, offset:1}} sm={{ span:1, offset:1}} xs={{span:1, offset:1}}>
                      <span className="SA_artistInfo">ARTIST INFO:</span>
                        <SocialIcon target="_blank" rel="noopener noreferrer" network="mailto" url="mailto:mlu@threed.tw"/>
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
                        <SocialIcon target="_blank" rel="noopener noreferrer" network="mailto" url="mailto:mlu@threed.tw"/>
                      </Col>
                    </Row>
                    </div>
                <div className="people_padding"></div>
            <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FMirror&amp;src=sdkpreparse"></MobileShareButton>
          </Container>

          <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>

            </div>
        );
    }
};

export default Mirror;
