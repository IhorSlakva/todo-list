const addButton = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

addButton.addEventListener("click", () => {
  if (input.value === "") return;
  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("todo-list-item");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  li.appendChild(deleteButton);
  list.appendChild(li);
  input.value = "";

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
  });
});
