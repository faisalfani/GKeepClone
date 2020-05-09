import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function CreateArea(props) {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  const [collapse, setCollapse] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setContent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function collapseInput() {
    if (collapse) {
      return <input name="title" onChange={handleChange} placeholder="Title" />;
    } else {
      return "";
    }
  }

  function zoomCollapse() {
    if (collapse) {
      return (
        <Zoom in={collapse ? "true" : "false"}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      );
    } else {
      return "";
    }
  }

  return (
    <div>
      <form
        className="create-note"
        id="create-form"
        onSubmit={(event) => props.handleAdd(event, content)}
      >
        {collapseInput()}
        <textarea
          onFocus={() => setCollapse(true)}
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows={collapse ? 3 : 1}
          required
        />
        {zoomCollapse()}
      </form>
    </div>
  );
}
