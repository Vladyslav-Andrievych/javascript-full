const listElem = document.querySelector('.list');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// создание дел

const createTaskElem = document.querySelector('.create-task-btn');

function counter() {
  let count = 5;

  return function () {
    count += 1;
    return count;
  };
}

const createId = counter();

const onCreateTask = (event) => {
  const taskInputElem = document.querySelector('.task-input');

  const isFilled = taskInputElem.value;
  if (!isFilled) {
    return;
  }

  const id = createId();

  tasks.push({ id, text: taskInputElem.value, done: false });

  taskInputElem.value = '';

  listElem.innerHTML = '';
  renderTasks(tasks);
};

createTaskElem.addEventListener('click', onCreateTask);

// переключатель выполнено/не выполнено

const onClickCkeckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskIndex = tasks.findIndex(
    (task) => task.id === Number(event.target.dataset.id)
  );

  if (tasks[taskIndex].done === false) {
    tasks[taskIndex].done = true;
  } else {
    tasks[taskIndex].done = false;
  }

  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', onClickCkeckbox);
