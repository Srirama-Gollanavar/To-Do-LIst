let todoList = [
  {
    item: 'DSA ( Arrays )',
    duedate: '2025-07-07'
  },
  {
    item: 'Web Development ( React )',
    duedate: '2025-07-07'
  }
];

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItem = inputElement.value.trim();
  let dateElement = document.querySelector("#todo-date");
  let date = dateElement.value.trim();

  if (todoItem === "" || date === "") {
    alert("Please enter both task and due date.");
    return;
  }

  todoList.push({ item: todoItem, duedate: date });
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector(".todo-container");
  if (todoList.length === 0) {
    displayElement.innerHTML = "<p style='color:white;'>No tasks available.</p>";
    return;
  }

  let newhtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let duedate = todoList[i].duedate;
    newhtml += `
      <span>${item}</span>
      <span>${duedate}</span>
      <button class='btn-delete' onclick="deleteItem(${i})">Delete</button>
    `;
  }
  displayElement.innerHTML = newhtml;
}

function deleteItem(index) {
  todoList.splice(index, 1);
  displayItems();
}

displayItems();
