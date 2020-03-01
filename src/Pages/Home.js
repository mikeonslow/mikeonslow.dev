import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
  Button
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import TechnologyList from "../Components/TechnologiesList";
import TestimonialList from "../Components/TestimonialList";

const Home = props => {
  return (
    <Container>
      <Row className="d-none d-md-block">
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={7} className="bg-primary mb-4 mb-md-0">
          <img
            src="images/hello.svg"
            className="img-fluid"
            alt="Progressive Web Apps"
          />
        </Col>
        <Col sm={12} md={6} lg={5}>
          <Card className="" color="dark">
            <CardHeader>
              <h1 className="display-4 text-secondary">Hello!</h1>
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
                I love solving problems, and have a passion for creating great
                cloud, web, and mobile applications that make life better for
                those around me!
              </CardText>
              <CardText className="text-light">
                I also love growing the tech community and host several meetups,
                and a conference focused on new technology in the Metro Detroit
                area.
              </CardText>
            </CardBody>
            <CardFooter>
              <Button
                color="secondary"
                size="lg"
                href="mailto:mikeonslow@gmail.com"
                block
                className="text-light"
              >
                &nbsp;
                <FontAwesomeIcon icon={faPaperPlane} size="lg" /> CONTACT MIKE
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h1 className="display-6 text-secondary">
            Nice words from people I've worked with:
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <TestimonialList />
      <Row>
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h1 className="display-6 text-secondary">
            Technologies I'm excited about, and currently working with:
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <TechnologyList />
    </Container>
  );
};

export default Home;
