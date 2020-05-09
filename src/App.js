import React, { useState } from "react";
import Heading from "./components/heading";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/createArea";

function App() {
  const [content, setContent] = useState([]);

  function addItem(event, value) {
    document.getElementById("create-form").reset();

    setContent((prev) => {
      return [...prev, value];
    });
    event.preventDefault();
  }

  function deleteItem(id) {
    setContent(() => {
      return content.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Heading />
      <CreateArea handleAdd={addItem} />
      {content.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
