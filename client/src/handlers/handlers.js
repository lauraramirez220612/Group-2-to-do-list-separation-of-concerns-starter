/* eslint-disable no-alert */
import { toDoInput, toDoList } from '../data/data.js';
// UPDATE ITEM
export const updateItem = (e) => {
  const editValue = prompt('edit the select item', e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
};

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
    // text
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDo-item');
    toDoDiv.appendChild(newToDo);

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
