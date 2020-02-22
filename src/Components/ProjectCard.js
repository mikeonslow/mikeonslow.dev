import React from "react";
import {
  Badge,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardHeader
} from "reactstrap";

const ProjectCard = props => {
  const { project } = props;

  const link = project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <CardText>{project.url}</CardText>
    </a>
  ) : (
    ""
  );

  const technologies = project.technologies ? (
    <CardFooter className="built-with-container">
      <small>BUILT WITH</small>
      <br />
      {project.technologies.map((technology, i) => (
        <Badge color="primary" pill key={i}>
          {technology}
        </Badge>
      ))}
    </CardFooter>
  ) : (
    ""
  );
  return (
    <Card className="mb-3" color="dark text-light">
      <CardImg
        top
        width="100%"
        src={`/images/projects/${project.src}`}
        alt={project.title}
      />
      <CardHeader className="bg-secondary text-light">
        {project.title}
      </CardHeader>
      <CardBody>
        <CardText>{project.description}</CardText>
        {link}
      </CardBody>
      {technologies}
    </Card>
  );
};

export default ProjectCard;
