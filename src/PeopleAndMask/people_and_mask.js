import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import {Container, Row, Col, Button} from 'react-bootstrap';
import image1 from '../assets/mask1.jpg'
import image2 from '../assets/mask2.jpg'
import image3 from '../assets/mask3.jpg'
import image4 from '../assets/mask4.jpg'
import image5 from '../assets/mask5.jpg'
import Pagination from '../modules/Pagination';
import banner from '../assets/placeholder.png';
import ProgramInfo from "../programInfo"
import Second_Title from "../modules/Second_Title"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import Footer from '../footer-temp';
import Slider from '../modules/img_slider_final'
import MobileShareButton from "../modules/mobileShareButton";

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 0,
    minHeight: 100,
    color: '#fff',
  },

};

const styles2 = {
  slide: {
    width:'100%',
    height:'auto',
    color: '#fff',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
};

var text = `We pretend hearing nothing - letting people be terrified and stay in doubt\nWe pretend seeing nothing - Ignoring people who cry or get silenced\nWe choose saying nothing - despite seeing people who panic or scream\nPeople are free to hear nothing, see nothing and say nothing\nBut when the freedom is lost, people may have to live with a life feeling terrified, doubtful, silenced or a life involving constantly screaming, crying or panicking.
`


class PeopleAndMask extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {

    const { index } = this.state;

    return (
      <div>
        <Container fluid>
          <Row>
            <Slider></Slider>

          </Row>
          <ProgramInfo
            subtitle="Behind the Masks"
            title="People and Mask"
            artistName="Lady Hao Hao"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask&amp;src=sdkpreparse"
            color="#D9C739">

          </ProgramInfo>

          <Second_Title secondTitle="About This Work:" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>


          <MainContents_Important style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matt
                where you are and what time of day, it is there above the horizon.">

          </MainContents_Important>

          <MainContents_Middle style={{color:"#0C3866"}} contents={text}>
          </MainContents_Middle>


          <Row>
            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <img src={image2} style={{maxWidth: "100%", height: "auto", width:"100%"}}/>
            </Col>
          </Row>

          <MainContents_Middle style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.">
          </MainContents_Middle>


          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask&amp;src=sdkpreparse"></MobileShareButton>

        </Container>
        <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
      </div>


    );
  }

}



export default PeopleAndMask;
