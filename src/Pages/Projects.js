import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    title: "Subject Wine - Website Design/Development",
    url: "https://subjective.wine",
    types: ["Website"],
    src: "subjective-wine.png",
    description:
      'Designed and build landing page for new startup "Subjective Wine"',
    technologies: [
      "React",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "Webpack"
    ]
  },
  {
    title: "Detroit Tech Watch 2019 - Website Design/Development",
    url: "https://2019.detroittechwatch.org",
    types: ["Website"],
    src: "dtw2019.png",
    description:
      "Created a website for the 2019 Detroit Tech Watch conference. Site was built using serverless" +
      " platform and cloud functions, as well as a NodeJS back-end with for API integration",
    technologies: [
      "React",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "NodeJS",
      "Serverless",
      "Webpack"
    ]
  },
  {
    title: "Reverse Church - Website Design/Development",
    url: null,
    types: ["Website Development", "Blog Development"],
    src: "reverse.png",
    description:
      "Custom development and website design/development as well as a Wordpress blog for Reverse Church",
    technologies: [
      "Wordpess",
      "PHP",
      "Twitter Bootstrap",
      "HTML 5",
      "CSS 3",
      "MySQL"
    ]
  },
  {
    title: "Detroit Tech Watch 2020 - Website Design/Development",
    url: "https://detroittechwatch.org",
    types: ["Website Design/Development", "API Development"],
    src: "dtw2020.png",
    description:
      "Created a website for the 2020 Detroit Tech Watch conference.",
    technologies: [
      "React",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "NodeJS",
      "Serverless",
      "Webpack"
    ]
  },
  {
    title: "RPM Freight Systems - Website Design/Development",
    url: null,
    types: ["Website Design/Development"],
    src: "rpm.png",
    description:
      "Designed and deployed website for RPM Freight Systems using WordPress.",
    technologies: [
      "Wordpress",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "PHP",
      "MySQL"
    ]
  },
  {
    title: "Elmfolio - Concept & Website",
    url: "https://mikeonslow.github.io/elm-workshop/demo",
    types: ["Website Design/Development"],
    src: "liveviewdemo.png",
    description:
      "Concept app to help teach folks the Elm programming language.",
    technologies: [
      "Elm",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "Webpack"
    ]
  },
  {
    title: "Analytics Dashboard Application",
    url: null,
    types: ["Website Design/Development"],
    src: "analytics.png",
    description:
      "Created an analytics dashboard for customers to gain insights on their customers and employees.",
    technologies: [
      "Elm",
      "jQuery",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "CSS 3",
      "PHP",
      "MySQL"
    ]
  },
  {
    title: "Clarity Voice - Website Development",
    url: "https://clarityvoice.com",
    types: ["Website Design/Development"],
    src: "clarity.png",
    description:
      "Created an analytics dashboard for Clarity Voice customers to gain insights on their customers and employees.",
    technologies: [
      "jQuery",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "CSS 3",
      "PHP",
      "ModX",
      "MySQL"
    ]
  },
  {
    title: "mikeonslow.info - Website Development",
    url: "http://mikeonslow.info",
    types: ["Website Design/Development"],
    src: "mikeonslow.info.png",
    description:
      "Created previous informational website for my work and info about me.",
    technologies: [
      "Angular",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "PHP",
      "MySQL"
    ]
  },
  {
    title: "Clarity Wiki - Application Development",
    url: "",
    types: ["Website Design/Development"],
    src: "dox.png",
    description:
      "Created application to manage internal company documentation.",
    technologies: [
      "JavaScript",
      "jQuery",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "ModX",
      "PHP",
      "MySQL"
    ]
  },
  {
    title: "brewfinder.org - Website Development",
    url: "https://brewfinder.org/",
    types: ["Website Design/Development"],
    src: "brewfinder.png",
    description:
      "Created project to help introduce folks to building sites with Elm and deploying to a serverless platform.",
    technologies: [
      "Elm",
      "JavaScript",
      "Twitter Bootstrap",
      "HTML 5",
      "Sass",
      "CSS 3",
      "NodeJS",
      "Serverless"
    ]
  }
];

const Projects = props => {
  const projectList = projects.map((project, i) => (
    <Col sm={12} md={6} key={i} className="mb-5 d-flex align-items-stretch">
      <ProjectCard project={project} key={i} />
    </Col>
  ));

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1 className="display-4 text-secondary">Projects</h1>
          <h5 className="display-6 subhead text-light">
            A sample of projects I've done over the years
          </h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>&nbsp;</Col>
      </Row>
      <Row>{projectList}</Row>
    </Container>
  );
};

export default Projects;
