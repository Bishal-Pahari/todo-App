import React, { useState } from "react";

function App() {
  const [newText, setNewText] = useState("");
  const [onPres, setOnPres] = useState(false);
  const [newItems, setNewItems] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setNewText(newValue);
  };

  const addItems = () => {
    if (newText === "") {
      setNewItems((prevItems) => {
        return [...prevItems];
      });
    } else {
      setNewItems((prevItems) => {
        return [...prevItems, newText];
      });
    }
    setNewText("");
  };

  const handleStrike = (event) => {
    // const test = event.target;
    setOnPres(true);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map((todoItems) => {
            return (
              <li
                onClick={handleStrike}
                style={{ textDecoration: onPres ? "line-through" : null }}
              >
                {todoItems}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
