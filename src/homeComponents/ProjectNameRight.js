import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

function ProjectNameRight(props) {

  // elmnt.scrollIntoView();
    return (


        <div id="projectInScroll">
            <Row id="mainRow">
                <Col xl={{span:16, offset:0}} className="projectCols">
                  <a href={props.url}><img  id="projectImage" src={props.image}/></a>
                </Col>
              {/*}  <Col xl={{span:5, offset:1}} lg={{span:10, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}} className="projectCols2">

                        <div id="projectName">{props.name}</div>


                </Col>*/}
            </Row>

        </div>
    )
}

export default ProjectNameRight;
