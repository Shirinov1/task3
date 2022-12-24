import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    const { age, specialty } = this.props;
    return (
      <>
        <p>{age}</p>
        <p>{specialty}</p>
      </>
    );
  }
}

export default PersonalInfo;