const toDoInput = document.querySelector('.toDo-input');
const toDoButton = document.querySelector('.toDo-input-icon');
const toDoList = document.querySelector('.toDo-list');

toDoButton.addEventListener('click', addItem);
toDoList.addEventListener('click', removeItem);
toDoList.addEventListener('click', checkItem);
toDoList.addEventListener('click', updateItem);
// toDoInput.addEventListener('onclick', removeAll);

//ADD ITEM
function addItem(event) {
  if (document.querySelector('.toDo-input').value.length == 0) {
    alert('The field cannot be empty!');
  } else {
    event.preventDefault();
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDo-item');

    toDoDiv.appendChild(newToDo);

    //check button
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    checkedButton.classList.add('checked-btn');
    toDoDiv.appendChild(checkedButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    toDoDiv.appendChild(trashButton);
    //update button
    const updateButton = document.createElement('button');
    updateButton.innerHTML = '<i class= "far fa-edit"></i>';
    updateButton.classList.add('update-btn');
    toDoDiv.appendChild(updateButton);
    toDoList.appendChild(toDoDiv);
    toDoInput.value = '';
  }
}

// works
function removeItem(event) {
  let remove = document.getElementsByClassName('trash-btn');
  console.log(remove);
  let i;
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    };
  }
}
//CHECK ITEM *******some issues********
function checkItem(event) {
  let check = document.getElementsByClassName('checked-btn');

  if (event.target.tagName === 'I') {
    event.target.classList.toggle('checked');
  }
  false;
}
//Update ITEM **********not working********
function updateItem(event) {
  let update = document.getElementsByClassName('update-btn');

  console.log(update);
}

// //REMOVE ALL BUTTON
// const removeAllB = document.createElement('button');
// removeAllB.innerHTML = '<span >REMOVE ALL</span>';
// removeAllB.classList.add('removeAll-btn');
// toDoList.appendChild(removeAllB);
// //REMOVE ALL ITEMS
// function removeAll(event) {
//   let all = document.getElementsByClassName('i');
//   toDoList.remove(all);
// }
