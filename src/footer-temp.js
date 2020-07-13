import React from 'react';
import './footer-temp.css';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';

const FooterPage = (props) => {
  async function submitForm(e){
    e.preventDefault();
    console.log("submit");
    var formData = new FormData();
    formData.append('contact_name', document.getElementById('contact_name').value)
    formData.append('cotact_email', document.getElementById('contact_email').value)
    formData.append('message', document.getElementById('contact_message').value)
    console.log(formData);
    const response = await fetch('footer_mail.php', {
        method: 'POST',
        body: formData,
      })
    .then(data => data.text())
    .then(data=>{
      if(data ==="success"){
        alert("Submission Successful!");
        document.getElementById('contact_message').value='';
      }else if(data==="failed"){
        alert("Please try again");
      }
    })
  }

  async function subscribe(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append('EMAIL',document.getElementById('newsletter_email').value);
    formData.append('NAME',document.getElementById('newsletter_name').value);
    const response = await fetch('subscribe_mail.php',{
      method: 'POST',
      body: formData,
    })
    alert("Thanks for Subscribing");
    document.getElementById('newsletter_email').value='';
    document.getElementById('newsletter_name').value='';
  }
    return (
      <Container fluid>
        <Row className="footer_form_container">
          <Col xl={{span:8, offset:2}} className="footer_form_border"></Col>
          <Col  className ="footer_newsletter_container"xl={{span:4, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
            <Row><Col className="footer_title">JOIN OUR NEWSLETTER</Col></Row>
            <Row><Col className="footer_subtitle">For Early Announcements And More</Col></Row>
            <Row><Form.Control id='newsletter_name' type="text" placeholder="Name" required size="lg"></Form.Control></Row>
            <Row><Form.Control id='newsletter_email' type="email" placeholder="Email" required size="lg"></Form.Control></Row>
            <Row><Col className="footer_button_row"><Button  bsPrefix="footer_submit_btn" className="footer_subscribe_btn">Join</Button></Col></Row>
          </Col>

          <Col className="footer_contact_container" xl={{span:4, offset:0}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
            <Row><Col className="footer_title">CONTACT US</Col></Row>
            <Row><Col className="footer_subtitle">PERFORMANCE / VENDOR / SPONSORSHIP OPPORTUNITIES</Col></Row>
            <Row><Col><Form.Control id="contact_name" type="text" placeholder="Name"required size="lg"></Form.Control></Col>
                  <Col><Form.Control id="contact_email" type="email" placeholder="Email"required size="lg"></Form.Control></Col>
            </Row>
            <Row><Col className="footer_textarea_container">
            <Form.Control id="contact_message" type="text"  as="textArea" placeholder="Message" required size="lg"></Form.Control>
          </Col></Row>
            <Row><Col className="footer_button_row"><Button bsPrefix="footer_submit_btn" className="footer_submit_btn">Submit</Button></Col></Row>
        </Col>
        </Row>
        <Row className="footer" >
          <Col xl={{span:12, offset:0}} style={{textAlign:"center"}}>
            <p className="footer_content">{props.content}</p>
          </Col>
        </Row>
      </Container>
    )
}

export default FooterPage;
