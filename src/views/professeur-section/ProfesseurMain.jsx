import DemoFooter from "components/Footers/DemoFooter";
import NavBar from "components/Navbars/NavBar";
import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

class ProfesseurMain extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="main">
          <div className="content-center">
            <Container>
              <>
                <div className="text-center">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                      <h2 className="title">Les professeurs</h2>
                      <p className="description">
                        Cause if you do, it can be yours for Free. Hit the
                        button below and download it. Start a new project or
                        give an old Bootstrap 4 project a new look.
                      </p>
                    </Col>
                  </Row>
                </div>
                <Row style={{ marginTop: "50px" }}>
                  <Col className="col-auto">
                    <Card style={{ width: "20rem" }} className="text-center">
                      <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                        <Button href="/#" color="primary">
                          Go somewhere
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="col-auto">
                    <Card style={{ width: "20rem" }} className="text-center">
                      <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                        <Button href="/#" color="primary">
                          Go somewhere
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col className="col-auto">
                    <Card style={{ width: "20rem" }} className="text-center">
                      <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                        <Button href="/#" color="primary">
                          Go somewhere
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </>
            </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}
export default ProfesseurMain;
