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
        <div className="main" >
          <div className="content-center">
            <Container>
              <Row >
                <Col md="2" sm="3">
                  <h6
                    className="title text-primary"
                    style={{ marginLeft: "60px" }}
                  >
                    Les Ateliers
                  </h6>

                  <Card style={{ width: "20rem" }} className="text-center">
                    <CardBody>
                      <CardTitle>Special title treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                   
                    </CardBody>
                  </Card>
                  <Button
                    className="btn-round"
                    color="primary"
                    outline
                    style={{ marginLeft: "100px" }}
                  >
                    <i className="nc-icon nc-minimal-down" />
                    plus
                  </Button>
                </Col>
                <Col className="mr-auto ml-auto" md="2" sm="3">
                  <h6
                    className="title text-primary"
                    style={{ marginLeft: "60px" }}
                  >
                    Les Examens
                  </h6>
                  <Card style={{ width: "20rem" }} className="text-center">
                    <CardBody>
                      <CardTitle>Special title treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                    </CardBody>
                  </Card>
                  <Button
                    className="btn-round"
                    color="primary"
                    outline
                    style={{ marginLeft: "100px" }}
                  >
                    <i className="nc-icon nc-minimal-down" />
                    plus
                  </Button>
                </Col>
                <Col className="mr-auto" md="2" sm="3">
                  <h6
                    className="title text-primary"
                    style={{ marginLeft: "50px" }}
                  >
                    Les Etudiants
                  </h6>
                  <Card style={{ width: "20rem" }}>
                    <CardBody>
                      <CardTitle>Special title treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                    </CardBody>
                  </Card>
                  <Button
                    className="btn-round"
                    color="primary"
                    outline
                    style={{ marginLeft: "100px" }}
                  >
                    <i className="nc-icon nc-minimal-down" />
                    plus
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}
export default ProfesseurMain;
