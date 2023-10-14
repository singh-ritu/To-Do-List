import React from "react";

function Todos(props) {
  return (
    <div>
      {props.todos.map((value, index) => {
        return (
          <div key={index}>
            <input type="checkbox" onChange={props.handleCheck} value={value} />
            <span style={props.isChecked(value)}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
