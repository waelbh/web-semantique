import DemoFooter from "components/Footers/DemoFooter";
import NavBar from "components/Navbars/NavBar";
import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";

class ModuleMain extends Component {
  state = {
    activeTab: "1",
  };

  toggle = (tab) => {
    const activeTab = this.state.activeTab;
    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };
  render() {
    return (
      <>
        <NavBar />
        <div className="main" >
          <div className="text-center">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Les modules</h2>
                <p className="description">
                  Cause if you do, it can be yours for Free. Hit the button
                  below and download it. Start a new project or give an old
                  Bootstrap 4 project a new look.
                </p>
              </Col>
            </Row>
          </div>
          <div className="content-center " style={{ marginTop: "30px" }}>
            <Container>
              <Card>
                <CardHeader>Module 1</CardHeader>
                <CardBody>
                  <CardTitle>Special title treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                        <NavItem style={{cursor:"pointer"}}>
                          <NavLink
                            className={
                              this.state.activeTab === "1" ? "text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            Cour 1
                          </NavLink>
                        </NavItem>
                        <NavItem  style={{cursor:"pointer"}}>
                          <NavLink
                            className={
                              this.state.activeTab === "2" ? "text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                              Cour 2
                          </NavLink>
                        </NavItem>
                        <NavItem  style={{cursor:"pointer"}}>
                          <NavLink
                            className={
                              this.state.activeTab === "3" ? " text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("3");
                            }}
                          >
                            Cour 3 
                          </NavLink>
                        </NavItem>
                      </Nav>
                       </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>Module 2</CardHeader>
                <CardBody>
                  <CardTitle>Special title treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.activeTab === "1" ? "text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            Cour 1
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.activeTab === "2" ? "text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                              Cour 2
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.activeTab === "3" ? " text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("3");
                            }}
                          >
                            Cour 3 
                          </NavLink>
                        </NavItem>
                      </Nav>
                        </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>Module 3</CardHeader>
                <CardBody>
                  <CardTitle>Special title treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.activeTab === "1" ? "text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            Cour 1
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.activeTab === "2" ? "text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                              Cour 2
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.activeTab === "3" ? " text-primary active" : ""
                            }
                            onClick={() => {
                              this.toggle("3");
                            }}
                          >
                            Cour 3 
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </CardBody>
              </Card>
  </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}
export default ModuleMain;
