import React from "react";
function AddButton(props) {
  const styles = {
    margin: "10px",
    backgroundColor: "white",
    border: "1px solid",
    borderRadius: "4px",
    padding: "8px 16px",
  };
  return (
    <div>
      <button style={styles} onClick={props.handleButton}>
        Add
      </button>
    </div>
  );
}
export default AddButton;
