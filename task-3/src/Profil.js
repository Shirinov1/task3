import React, { Component } from "react";
import Name from "./Name";
import Adress from "./Adress";
import PersonalInfo from "./PersonalInfo";
import Email from "./Email";

class Profil extends Component {
  render() {
    return (
      <div className="Profile">
        <Name title="Tapdig Shirinov"/>
        <Email title="tapdigshirinov@gmail.com" />
        <Adress title="Baku" />
        <PersonalInfo age={19} specialty="ITIF" />
      </div>
    );
  }
}

export default Profil;
