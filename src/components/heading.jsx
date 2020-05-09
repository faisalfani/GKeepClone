import React, { Component } from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

class Heading extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1>
          <EmojiObjectsIcon />
          Keep
        </h1>
      </header>
    );
  }
}

export default Heading;
