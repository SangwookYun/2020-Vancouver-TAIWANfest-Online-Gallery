import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_With_Bold = (props) => {
    return (
        <div>
            <Row className="mainSection_Row_adonis">
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
                    <p >{props.contents}<b>{props.bold}</b>{props.contents2}
                        <br/>
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default MainContents_With_Bold;
