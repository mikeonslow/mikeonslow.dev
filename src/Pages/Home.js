import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Button
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Home = props => {
  return (
    <Container>
      <Row className="d-none d-md-block">
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={7} className="bg-primary">
          <img
            src="images/thinkincode.png"
            className="img-fluid"
            alt="Progressive Web Apps"
          />
        </Col>

        <Col sm={12} md={6} lg={5}>
          <Card className="" color="dark">
            <CardHeader>
              <h1 className="display-4 text-primary">Hello!</h1>
            </CardHeader>
            <CardBody>
              <CardText className="text-light">
                My name is Mike Onslow, and I'm a Principal Software Engineer at{" "}
                <a href="https://clarityvoice.com/" target="_blank">
                  Clarity Voice
                </a>
                .
              </CardText>
              <CardText className="text-light">
                I love solving problems and have a passion for creating great
                web and mobile applications that make life better for those
                around me!
              </CardText>
              <CardText className="text-light">
                I also love growing the tech community and host several meetups
                and a conference focusued on new technology in the metro Detroit
                area.
              </CardText>
              <CardText className="text-light">
                <Button
                  color="primary"
                  outline
                  size="lg"
                  href="mailto:mikeonslow@gmail.com"
                >
                  &nbsp;
                  <FontAwesomeIcon icon={faPaperPlane} size="lg" /> CONTACT MIKE
                </Button>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
