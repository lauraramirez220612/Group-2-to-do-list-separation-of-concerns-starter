import { addItem, removeItem, removeAll } from '../handlers/handlers.js';

document.querySelector('.toDo-input-icon').addEventListener('click', addItem);
document.querySelector('.toDo-list').addEventListener('click', removeItem);
document.getElementById('clear').addEventListener('click', removeAll);
