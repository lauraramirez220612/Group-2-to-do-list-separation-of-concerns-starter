/* eslint-disable no-alert */
// UPDATE ITEM
const updateItem = (e) => {
  const editValue = prompt('edit the select item', e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
};

// change style of completed task
const completeTask = (e) => {
  e.classList.toggle('completed');
};

const toDoInput = document.querySelector('.toDo-input');
const toDoList = document.querySelector('.toDo-list');

// ADD ITEM HANDLER
export const addItem = (event) => {
  if (document.querySelector('.toDo-input').value.length === 0) {
    alert('The field cannot be empty!');
  } else {
    event.preventDefault();
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');
    // check button
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('checking');
    toDoDiv.appendChild(checkBox);

    // add text of the task
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDo-item');
    toDoDiv.appendChild(newToDo);

    // change style of completed text
    checkBox.onclick = () => {
      completeTask(newToDo);
    };

    // update button
    const updateButton = document.createElement('button');
    updateButton.classList.add('update-btn');
    updateButton.innerHTML = '<i class= "far fa-edit"></i>';
    updateButton.onclick = () => {
      updateItem(newToDo);
    };
    toDoDiv.appendChild(updateButton);
    toDoList.appendChild(toDoDiv);
    toDoInput.value = '';

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    toDoDiv.appendChild(trashButton);
  }
  // //remove all button
  const toDoDiv = document.createElement('div');
  const updateButton = document.createElement('button');
  // updateButton.classList.add('update-btn');
  // updateButton.innerHTML = '<i class= "far fa-edit"></i>';
  // updateButton.onclick = () => {
  //   updateItem(newToDo);
};

// REMOVE ITEM
export const removeItem = () => {
  const remove = document.getElementsByClassName('trash-btn');
  let i;
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      this.parentElement.style.display = 'none';
    };
  }
};

// REMOVE ALL ITEMS
export const removeAll = () => {
  toDoList.innerHTML = '';
};
