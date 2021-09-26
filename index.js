const listElem = document.querySelector('.list');

const tasks = [
  { id: 1, text: 'Buy milk', done: false, time: new Date() },
  { id: 2, text: 'Pick up Tom from airport', done: true, time: new Date() },
  { id: 3, text: 'Visit party', done: false, time: new Date() },
  { id: 4, text: 'Visit doctor', done: true, time: new Date() },
  { id: 5, text: 'Buy meat', done: false, time: new Date() },
];

const compareTime = (a, b) => {
  const diff = a - b;

  if (diff < 0) {
    return 1;
  }
  if (diff > 0) {
    return -1;
  }
  return 0;
};

const compareDone = (a, b) => {
  const diff = a - b;

  if (diff < 0) {
    return -1;
  }
  if (diff > 0) {
    return 1;
  }
  return 0;
};

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => {
      const comapreTimeResult = compareTime(a.time, b.time);
      const compareDoneResult = compareDone(a.done, b.done);

      if (compareDoneResult) {
        return compareDoneResult;
      }

      if (comapreTimeResult) {
        return comapreTimeResult;
      }

      return 0;
    })
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

  tasks.push({ id, text: taskInputElem.value, done: false, time: new Date() });

  taskInputElem.value = '';

  listElem.innerHTML = '';
  renderTasks(tasks);
};

createTaskElem.addEventListener('click', onCreateTask);

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
    tasks[taskIndex].time = new Date();
  } else {
    tasks[taskIndex].done = false;
    tasks[taskIndex].time = new Date();
  }

  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', onClickCkeckbox);

// Another Task -----------------------------------------------------------------

// const stringToDate = (string) => {
//   const [month, date] = string.split('/');

//   return new Date(0, month - 1, date);
// };

// const compareDates = (a, b) => {
//   const diff = a - b;

//   if (diff < 0) {
//     return -1;
//   }

//   if (diff > 0) {
//     return 1;
//   }

//   return 0;
// };

// const months = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];

// const studentsBirthDays = (students) =>
//   students
//     .map((student) => ({
//       name: student.name,
//       birthDate: stringToDate(student.birthDate),
//     }))
//     .sort((student1, student2) =>
//       compareDates(student1.birthDate, student2.birthDate)
//     )
//     .reduce((acc, student) => {
//       Array.isArray(acc[months[student.birthDate.getMonth()]])
//         ? acc[months[student.birthDate.getMonth()]].push(student.name)
//         : (acc[months[student.birthDate.getMonth()]] = [student.name]);

//       return {
//         ...acc,
//       };
//     }, {});

// console.log(
//   studentsBirthDays([
//     { name: 'Tom', birthDate: '01/15/2010' },
//     { name: 'Ben', birthDate: '01/17/2008' },
//     { name: 'Sam', birthDate: '03/15/2010' },
//   ])
// );
