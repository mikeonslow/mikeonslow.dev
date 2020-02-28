import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardHeader,
  CardLink,
  Col,
  Row
} from "reactstrap";

const TechnologyList = props => {
  const technologies = [
    { name: "ReactJS", src: "react.png", href: "https://reactjs.org" },
    {
      name: "React Native",
      src: "react_native.png",
      href: "https://reactnative.dev/"
    },
    { name: "Redux", src: "redux.png", href: "https://redux.js.org" },
    {
      name: "TypeScript",
      src: "ts.png",
      href: "https://www.typescriptlang.org"
    },
    {
      name: "JAMstack (Serverless)",
      src: "jamstack.png",
      href: "https://jamstack.org"
    },
    {
      name: "Sass",
      src: "sass.png",
      href: "https://sass-lang.com"
    },
    {
      name: "JavaScript (ES6+)",
      src: "js.png",
      href: "https://www.javascript.com"
    },
    { name: "Elixir", src: "elixir.png", href: "https://elixir-lang.org" },
    {
      name: "Phoenix Framework",
      src: "phoenix.png",
      href: "https://www.phoenixframework.org"
    },
    {
      name: "Google Cloud Platform",
      src: "gcp.png",
      href: "https://cloud.google.com"
    },
    {
      name: "Google Cloud Functions",
      src: "gcf.png",
      href: "https://cloud.google.com/functions"
    },
    {
      name: "Elm",
      src: "elm.png",
      href: "https://elm-lang.org"
    }
  ];

  const technologyList = technologies.map((technology, i) => (
    <Col sm={6} md={3} lg={2} key={i} className="mb-3">
      <TechPanel technology={technology} key={i} />
    </Col>
  ));

  return <Row>{technologyList}</Row>;
};

const TechPanel = props => {
  const { technology } = props;

  return (
    <Card className="" color="secondary text-light">
      <CardImg
        src={"/images/tech/" + technology.src}
        alt={technology.name + " Logo"}
      />
      {/* <CardHeader className="text-primary">{technology.name}</CardHeader> */}
      {/* <CardBody>
        <CardText>desc</CardText>
      </CardBody> */}
      <CardFooter className="text-center align-middle bg-secondary text-light">
        <CardLink href={technology.href} target="_blank" className="text-light">
          {technology.name}
        </CardLink>
      </CardFooter>
    </Card>
  );
};

export default TechnologyList;
