import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardText
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faBuilding } from "@fortawesome/free-solid-svg-icons";
const EventsAndGroups = props => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1 className="display-4 text-secondary">Events &amp; Groups</h1>
          <h5 className="display-6 subhead text-light">
            Information on groups and events I co-organize
          </h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card className="mb-3" color="dark" className="text-light">
            {" "}
            <CardImg
              src="/images/dtwconf.jpeg"
              alt="Detroit Tech Watch Conference 2019"
            />
            <CardHeader className="bg-secondary text-light">
              <FontAwesomeIcon icon={faBuilding} size="lg" /> Detroit Tech Watch
              - Conference
            </CardHeader>
            <CardBody>
              <CardText>
                A look toward the future of software development. A one day long
                event with nationally recognized speakers, to discuss
                progressive ideas, and the importance of continuous learning in
                software development.
              </CardText>
            </CardBody>
            <CardFooter>
              <a href="https://detroittechwatch.org" target="_blank">
                https://detroittechwatch.org
              </a>
            </CardFooter>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="mb-3" color="dark" className="text-light">
            <CardImg
              src="/images/dtwmeetup.png"
              alt="Detroit Tech Watch Conference 2019"
            />
            <CardHeader className="bg-secondary text-light">
              <FontAwesomeIcon icon={faUserFriends} size="lg" /> Detroit Tech
              Watch - Monthly Meetup
            </CardHeader>
            <CardBody>
              <CardText>
                A group focusing on new technology in the software development
                space.{" "}
              </CardText>
            </CardBody>{" "}
            <CardFooter>
              <a
                href="https://www.meetup.com/Detroit-Tech-Watch"
                target="_blank"
              >
                https://www.meetup.com/Detroit-Tech-Watch
              </a>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventsAndGroups;
