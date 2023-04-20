const form = document.querySelector('.form');
const input = document.querySelector('#task');
const taskList = document.createElement('ul');
const todoApp = document.querySelector('.todoApp');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value;
  if (task !== '') {
    addTask(task);
    input.value = '';
  }
});

function addTask(task) {
  const listItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.className = 'deleteButton';

  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });
  
  listItem.innerHTML = task;
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  todoApp.appendChild(taskList);
}
// fazer algum jeito de não ter mais de 9 'li'