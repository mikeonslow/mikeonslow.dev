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

const TestimonialList = props => {
  const testimonials = [
    {
      name: "Brandon Dalaly, CSPO",
      src: "brandon.jpg",
      job: <p>Associate Product Owner at BCBS of Michigan</p>,
      description:
        "I can recommend Mike Onslow as a person with great expertise and deep knowledge of web development and design. Mike Onslow was one of the most dedicated professionals through his work at Concise Computer Consulting and was always willing to step up and take on the most challenging projects. Mike Onslow is a highly intelligent person and a hard-working and diligent employee. I can highly recommend working with him."
    },
    {
      name: "Garett Tunison",
      src: "garett.jpg",
      job: <p>Senior CAD Technician - Hubbell, Roth &amp; Clark</p>,
      description:
        "In the years that I have worked with Mike, he has shown an unyielding excitement in his work. This is very apparent in his web designs. Each of Mike's web creations is a testament to his creativity and expertise in development and design. I always look forward to each piece of work that Mike creates."
    }
  ];

  const testimonialList = testimonials.map((testimonial, i) => (
    <Col sm={12} md={6} key={i} className="mb-3">
      <TestimonialPanel testimonial={testimonial} key={i} />
    </Col>
  ));

  return <Row>{testimonialList}</Row>;
};

const TestimonialPanel = props => {
  const { testimonial } = props;

  return (
    <Card className="text-justify" color="dark">
      <CardHeader className="text-primary text-center">
        <img
          src={"/images/testimonials/" + testimonial.src}
          alt={testimonial.name}
          className="avatar"
        />
        <br />
        {testimonial.name}
        <br />
        {testimonial.job}
      </CardHeader>
      <CardBody className="text-light">
        <CardText>{testimonial.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default TestimonialList;
