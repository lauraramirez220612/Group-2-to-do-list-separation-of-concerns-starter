const toDoInput = document.querySelector('.toDo-input');
const toDoButton = document.querySelector('.toDo-input-icon');
const toDoList = document.querySelector('.toDo-list');
const clearButton = document.getElementById('clear');
toDoButton.addEventListener('click', addItem);
toDoList.addEventListener('click', removeItem);
clearButton.addEventListener('click', removeAll);
//toDoList.addEventListener('click', checkItem);
//toDoList.addEventListener('click', updateItem);
// toDoInput.addEventListener('onclick', removeAll);

//ADD ITEM
function addItem(event) {
  if (document.querySelector('.toDo-input').value.length == 0) {
    alert('The field cannot be empty!');
  } else {
    event.preventDefault();
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');

    //check button
    const checkBox = document.createElement('input'); // changed checkedButton to checkBox
    checkBox.type = 'checkbox'; // changed to checkbox
    checkBox.classList.add('checking');
    toDoDiv.appendChild(checkBox);
    // text
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDo-item');
    toDoDiv.appendChild(newToDo);

    //update button
    const updateButton = document.createElement('button');
    updateButton.innerHTML = '<i class= "far fa-edit"></i>';
    updateButton.classList.add('update-btn');
    toDoDiv.appendChild(updateButton);
    toDoList.appendChild(toDoDiv);
    toDoInput.value = '';

     //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    toDoDiv.appendChild(trashButton);
  }
}

// REMOVE ITEM
function removeItem(event) {
  let remove = document.getElementsByClassName('trash-btn');
  // console.log(remove);
  let i;
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    };
  }
}

//REMOVE ALL ITEMS ***change this function – remove only 1 time list but nod add values anymore
function removeAll(event) {
  toDoList.remove();
}