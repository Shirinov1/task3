import React, { Component } from "react";

class Email extends Component {
  render() {
    const title = this.props.title;
    return <p>{title}</p>;
  }
}

export default Email;