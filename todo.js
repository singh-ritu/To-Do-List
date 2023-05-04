console.log("hello");
const input = document.querySelector("#input_todo");
function handleAddTodo() {
  console.log(input.value);

  const h2Element = document.createElement("h2");
  const divElement = document.createElement("div");
  h2Element.append(input.value);
  divElement.appendChild(h2Element);
  divElement.style.border = "1px solid black";
  divElement.style.padding = "8px 16px";
  divElement.style.marginBottom = " 16px";
  console.log(h2Element);
  const list = document.querySelector(".list");
  list.appendChild(divElement);
  input.value = "";
}
// list > divElement > h2Element
