import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_Important = (props) => {
    return (
        <div>
            <Row className="mainSection_Important_Row">
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
                    <p>{props.contents}<br/></p>
                </Col>
            </Row>
        </div>
    );
}

export default MainContents_Important;

