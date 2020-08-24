import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './ButtonModule.css'


const Button2 = (props) => {
    return (
        <div>
          <div  style={{ marginTop: "140px"}}></div>
            <Row>
                <Col style={{ marginBottom: "50px", textAlign:"center"}} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <Button onClick={props.onclick} bsPrefix="uploadBtn"> {props.title}</Button>
                </Col>
            </Row>

            <Row>
                <Col style={{ marginBottom: "50px", textAlign:"center"}} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <Button variant="primary" type="submit" bsPrefix="mobileShareBtn" target="_blank" rel="noopener noreferrer" href={props.togoUrl}>分享給朋友</Button>
                </Col>
            </Row>

        </div>
    );
}

export default Button2;
