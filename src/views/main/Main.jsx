import React, { Component } from "react";
import { Container } from "reactstrap";
import Etudiants from "./Etudiants";
import Modules from "./Modules";
import Professeurs from "./Professeurs";

class Main extends Component {
  render() {
    return (
      <div className="content-center">
        <Container>
            <Professeurs></Professeurs>
            <Modules></Modules>
            <Etudiants></Etudiants>

        </Container>
      </div>
    );
  }
}
export default Main;
