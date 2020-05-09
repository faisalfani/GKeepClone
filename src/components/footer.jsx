import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
      <footer>
        <p>Copyright {currentYear}</p>
      </footer>
    );
  }
}

export default Footer;
