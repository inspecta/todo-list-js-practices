import './style.css';
import retrieveFromStorage from './modules/retrieveFromStorage.js';
import displayTasks, { footerEl } from './modules/displayTasks.js';
import addTask from './modules/addTask.js';

const totalTasks = JSON.parse(retrieveFromStorage('todo')) || [];
const tasksListDisplay = document.querySelector('.display');

if (!totalTasks.length) {
  tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';
}

addTask();

totalTasks.forEach((i) => {
  displayTasks(i);
});

footerEl();
