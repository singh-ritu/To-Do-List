const input = document.querySelector("#input_todo");

//taking inputvalue in the form of h2 tag in a div by creating dynamically
function handleAddTodo() {
  console.log(input.value);

  const h2Element = document.createElement("h2");
  const divElement = document.createElement("div");
  h2Element.append(input.value);
  divElement.appendChild(h2Element);
  divElement.style.border = "1px solid black";
  divElement.style.padding = "8px 16px";
  divElement.style.marginBottom = " 16px";
  divElement.style.backgroundColor = "lightgrey";
  divElement.style.borderRadius = "2px";

  const list = document.querySelector(".list");
  list.appendChild(divElement);
  input.value = "";
}

// how to trigger click event in javascript
const button = document.querySelector(".btn");

document.addEventListener("keyup", function (e) {
  if (e.key == "Enter" && input.value !== "") {
    console.log("enter is clicked");
    handleAddTodo();
  }
});

button.addEventListener("click", handleAddTodo);
