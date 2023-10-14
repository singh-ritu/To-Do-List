import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import AddButton from "./components/AddButton";
import Inputs from "./components/Inputs";
import Todos from "./components/Todos";
import { styles } from "./components/Styles";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleClick = () => {
    if (input === "") {
      window.alert("Please! Enter your todos");
    } else {
      const newarray = [...todos];
      newarray.push(input);
      setTodos(newarray);
      setInput("");
      console.log(input);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  const handleCheck = (event) => {
    var updatedlist = [...checked];
    const newobj = { ...styles };
    if (event.target.checked) {
      updatedlist = [...checked, event.target.value];
    } else {
      updatedlist.splice(input.indexOf(event.target.value), 1);
    }
    setChecked(updatedlist);
  };

  var isChecked = (value) =>
    checked.includes(value) ? styles.checkedItems : {};

  return (
    <div style={styles.container} className="Container">
      <h1 style={styles.heading}>To-Do-List</h1>
      <div className="Inputs" style={styles.Inputs}>
        <Inputs
          handleChange={handleChange}
          handleEnterKey={handleEnterKey}
          input={input}
        />

        <AddButton handleButton={handleClick} />
      </div>
      <Todos todos={todos} handleCheck={handleCheck} isChecked={isChecked} />
    </div>
  );
}

export default App;
