const addButton = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");
const container = document.querySelector(".todo-container");

setTimeout(() => {
  container.style.opacity = "1";
  container.style.transform = "translateY(0)";
}, 1000);

addButton.addEventListener("click", () => {
  if (input.value.trim() === "") return;
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
