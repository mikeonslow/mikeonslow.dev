import React from "react";
import "./App.less";
import "rsuite/lib/styles/themes/dark/index.less";

import {
  Avatar,
  Grid,
  Row,
  Col,
  Container,
  Navbar,
  Header,
  Nav,
  Icon,
  Panel,
  Footer,
  Content,
  Divider,
  Badge
} from "rsuite";
function App() {
  return (
    <div>
      <Container fluid="true" className="test">
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <a className="navbar-brand logo">
                <img src="/images/mo.png" alt="Mike Onslow" className="logo" />
              </a>
            </Navbar.Header>
            <Navbar.Body>
              <Nav>
                <Nav.Item icon={<Icon icon="user-info" />} href="#intro">
                  Intro
                </Nav.Item>
                <Nav.Item icon={<Icon icon="building-o" />} href="#projects">
                  Projects
                </Nav.Item>
                <Nav.Item icon={<Icon icon="calendar" />} href="#events">
                  Events &amp; Groups
                </Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav.Item
                  icon={<Icon icon="github" />}
                  href="https://github.com/mikeonslow"
                  target="_blank"
                ></Nav.Item>
                <Nav.Item
                  icon={<Icon icon="linkedin" />}
                  href="https://www.linkedin.com/in/mikeonslow/"
                  target="_blank"
                ></Nav.Item>
                <Nav.Item
                  icon={<Icon icon="twitter" />}
                  href="https://twitter.com/mike_onslow"
                  target="_blank"
                ></Nav.Item>
              </Nav>
            </Navbar.Body>
          </Navbar>
        </Header>
        <a href="#intro" id="intro"></a>
        <Content>
          {" "}
          <Grid>
            <Row>
              <Col xs={24}>&nbsp;</Col>
            </Row>
            <Row>
              <Col xs={24}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/thinkincode.png" className="card-image" />
                  <Panel>
                    <p>
                      My name is Mike Onslow, and I'm a Principal Software
                      Engineer at{" "}
                      <a href="https://clarityvoice.com/" target="_blank">
                        Clarity Voice
                      </a>
                      .
                    </p>
                    <p>
                      I love solving problems and have a passion for creating
                      great web applications that make life better for those
                      around me!
                    </p>
                    <p>
                      I also love growing the tech community and host several
                      meetups and a conference in the metro Detroit area.
                    </p>
                  </Panel>
                </Panel>
              </Col>
            </Row>
            <a href="#projects" id="projects"></a>
            <Row>
              <Col xs={24}>&nbsp;</Col>
            </Row>
            <Row>
              <Col xs={24}>
                <h3 className="">Projects</h3>
                <Divider />
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/dtw2019.png" className="card-image" />
                  <Panel>
                    <h5>Detroit Tech Watch 2019 - Website</h5>
                    <p>
                      Created a website for the 2019 Detroit Tech Watch
                      conference
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="React" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="Sass" />
                      <Badge content="CSS 3" />
                      <Badge content="NodeJS" />
                      <Badge content="Netlify" />
                    </div>
                    <p>
                      <a
                        href="https://2019.detroittechwatch.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://2019.detroittechwatch.org
                      </a>
                    </p>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/reverse.png" className="card-image" />
                  <Panel>
                    <h5>Reverse Church - Website &amp; Blog</h5>
                    <p>
                      Created a website and Wordpress blog for Reverse Church
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="Wordpess" />
                      <Badge content="PHP" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="CSS 3" />
                    </div>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/dtw2020.png" className="card-image" />
                  <Panel>
                    <h5>Detroit Tech Watch 2020 - Website</h5>
                    <p>
                      Created conference website for the 2020 Detroit Tech Watch
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="React" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="Sass" />
                      <Badge content="CSS 3" />
                      <Badge content="NodeJS" />
                      <Badge content="Netlify" />
                    </div>
                    <p>
                      <a
                        href="https://detroittechwatch.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://detroittechwatch.org
                      </a>
                    </p>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/rpm.png" className="card-image" />
                  <Panel>
                    <h5>RPM Freight Systems - Website Development</h5>
                    <p>
                      Designed and deployed website for RPM Freight Systems
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="Wordpress" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="CSS 3" />
                      <Badge content="PHP" />
                    </div>
                    <p>
                      <a
                        href="https://www.rpmmoves.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.rpmmoves.com
                      </a>
                    </p>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/liveviewdemo.png" className="card-image" />
                  <Panel>
                    <h5>Elmfolio - Concept &amp; Website</h5>
                    <p>
                      Concept app to help teach folks the{" "}
                      <a
                        href="https://elm-lang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Elm
                      </a>{" "}
                      programming language
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="Elm" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="Sass" />
                      <Badge content="CSS 3" />
                    </div>
                    <p>
                      <a
                        href="https://mikeonslow.github.io/elm-workshop/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://mikeonslow.github.io/elm-workshop/demo
                      </a>
                    </p>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/analytics.png" className="card-image" />
                  <Panel>
                    <h5>Analytics Dashboard - Web Application</h5>
                    <p>
                      Created an analytics dashboard for customers to gain
                      insights on their customers and employees. <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="Elm" />
                      <Badge content="jQuery" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="CSS 3" />
                      <Badge content="PHP" />
                    </div>
                    <br />
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/clarity.png" className="card-image" />
                  <Panel>
                    <h5>Clarity Voice - Website Development</h5>
                    <p>
                      Created an analytics dashboard for Clarity Voice customers
                      to gain insights on their customers and employees. <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="jQuery" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="CSS 3" />
                      <Badge content="PHP" />
                      <Badge content="ModX" />
                    </div>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img
                    src="/images/mikeonslow.info.png"
                    className="card-image"
                  />
                  <Panel>
                    <h5>mikeonslow.info - Website Development</h5>
                    <p>
                      Created previous informational website for my work and
                      info about me
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="Angular" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="Sass" />
                      <Badge content="CSS 3" />
                      <Badge content="PHP" />
                    </div>
                    <p>
                      <a
                        href="http://mikeonslow.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        http://mikeonslow.info/
                      </a>
                    </p>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/dox.png" className="card-image" />
                  <Panel>
                    <h5>Documentation App - Application Development</h5>
                    <p>
                      Created application to manage internal company
                      documentation
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="JavaScript" />
                      <Badge content="JQuery" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="Sass" />
                      <Badge content="CSS 3" />
                      <Badge content="ModX" />
                      <Badge content="PHP" />
                    </div>
                  </Panel>
                </Panel>
              </Col>
              <Col xs={24} md={8}>
                <Panel bordered shaded bodyFill className="card">
                  <img src="/images/brewfinder.png" className="card-image" />
                  <Panel>
                    <h5>brewfinder.org - Website Development</h5>
                    <p>
                      Created project to help introduce folks to building sites
                      with{" "}
                      <a
                        href="http:/elm-lang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Elm
                      </a>{" "}
                      and deploying to a serverless platform.
                      <br />
                      <br />
                    </p>
                    <div className="built-with-badge-container">
                      Built with:
                      <Badge content="Elm" />
                      <Badge content="JavaScript" />
                      <Badge content="Twitter Bootstrap" />
                      <Badge content="HTML 5" />
                      <Badge content="Sass" />
                      <Badge content="CSS 3" />
                      <Badge content="NodeJS" />
                      <Badge content="Netlify" />
                    </div>
                    <p>
                      <a
                        href="https://brewfinder.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://brewfinder.org
                      </a>
                    </p>
                  </Panel>
                </Panel>
              </Col>
            </Row>
            <Row>
              <Col xs={24}>&nbsp;</Col>
            </Row>
            <a href="#events" id="events"></a>
            <Row>
              <Col xs={24}>
                <h3 className="">Events &amp; Groups</h3>
                <Divider />
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={12}>
                <Panel
                  bordered
                  shaded
                  bodyFill
                  className="card"
                  header="Detroit Tech Watch - Conference"
                >
                  <Panel>
                    <p>
                      A look toward the future of software development. A one
                      day long event with nationally recognized speakers, to
                      discuss progressive ideas, and the importance of
                      continuous learning in software development.
                    </p>
                    <a href="https://detroittechwatch.org" target="_blank">
                      https://detroittechwatch.org
                    </a>
                  </Panel>
                  <img src="/images/dtwconf.jpeg" className="card-image" />
                </Panel>
              </Col>
              <Col xs={24} md={12}>
                <Panel
                  bordered
                  shaded
                  bodyFill
                  className="card"
                  header="Detroit Tech Watch - Monthly Meetup"
                >
                  <Panel>
                    <p>
                      A group focusing on new technology in the software
                      development space.{" "}
                    </p>
                    <a
                      href="https://www.meetup.com/Detroit-Tech-Watch"
                      target="_blank"
                    >
                      https://www.meetup.com/Detroit-Tech-Watch
                    </a>
                  </Panel>
                  <img src="/images/dtwmeetup.png" className="card-image" />
                </Panel>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer className="footer">
          <Row>
            <Col xs={24}>&nbsp;</Col>
          </Row>
          <Row>
            <Col xs={24}>Copyright 2020 - Mike Onslow</Col>
          </Row>
        </Footer>
      </Container>
    </div>
  );
}

export default App;
