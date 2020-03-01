import React from "react";
import { Card, CardImg, CardFooter, CardLink, Col, Row } from "reactstrap";

const TechnologyList = props => {
  const technologies = [
    { name: "ReactJS", src: "react.png", href: "https://reactjs.org" },
    {
      name: "React Native",
      src: "react_native.svg",
      href: "https://reactnative.dev/"
    },
    { name: "Redux", src: "redux.png", href: "https://redux.js.org" },
    {
      name: "TypeScript",
      src: "ts.svg",
      href: "https://www.typescriptlang.org"
    },
    {
      name: "JAMstack (Serverless)",
      src: "jamstack.svg",
      href: "https://jamstack.org"
    },
    {
      name: "Sass",
      src: "sass.svg",
      href: "https://sass-lang.com"
    },
    {
      name: "JavaScript (ES6+)",
      src: "js.svg",
      href: "https://www.javascript.com"
    },
    { name: "Elixir", src: "elixir.png", href: "https://elixir-lang.org" },
    {
      name: "Phoenix Framework",
      src: "phoenix.svg",
      href: "https://www.phoenixframework.org"
    },
    {
      name: "Google Cloud Platform",
      src: "gcp.svg",
      href: "https://cloud.google.com"
    },
    {
      name: "Google Cloud Functions",
      src: "gcf.svg",
      href: "https://cloud.google.com/functions"
    },
    {
      name: "Elm",
      src: "elm.svg",
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
    <Card color="dark">
      <CardImg
        src={"/images/tech/" + technology.src}
        alt={technology.name + " Logo"}
      />
      <CardFooter className="text-center align-middle bg-dark">
        <CardLink href={technology.href} target="_blank">
          {technology.name}
        </CardLink>
      </CardFooter>
    </Card>
  );
};

export default TechnologyList;
