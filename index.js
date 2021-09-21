const logger = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const cleanEventsList = () => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML = '';
};

const attachHandlers = (
  func1ForSpan,
  func2ForSpan,
  func1ForP,
  func2ForP,
  func1ForDiv,
  func2ForDiv
) => {
  const spanElem = document.querySelector('.rect_span');
  spanElem.addEventListener('click', func1ForSpan, true);
  spanElem.addEventListener('click', func2ForSpan);

  const pElem = document.querySelector('.rect_p');
  pElem.addEventListener('click', func1ForP, true);
  pElem.addEventListener('click', func2ForP);

  const divElem = document.querySelector('.rect_div');
  divElem.addEventListener('click', func1ForDiv, true);
  divElem.addEventListener('click', func2ForDiv);
};

const removeHandlers = (
  func1ForSpan,
  func2ForSpan,
  func1ForP,
  func2ForP,
  func1ForDiv,
  func2ForDiv
) => {
  const spanElem = document.querySelector('.rect_span');
  spanElem.removeEventListener('click', func1ForSpan, true);
  spanElem.removeEventListener('click', func2ForSpan);

  const pElem = document.querySelector('.rect_p');
  pElem.removeEventListener('click', func1ForP, true);
  pElem.removeEventListener('click', func2ForP);

  const divElem = document.querySelector('.rect_div');
  divElem.removeEventListener('click', func1ForDiv, true);
  divElem.removeEventListener('click', func2ForDiv);
};

const loggerGreySpan = logger.bind(null, 'SPAN', 'grey');
const loggerGreenSpan = logger.bind(null, 'SPAN', 'green');

const loggerGreyP = logger.bind(null, 'P', 'grey');
const loggerGreenP = logger.bind(null, 'P', 'green');

const loggerGreyDiv = logger.bind(null, 'DIV', 'grey');
const loggerGreenDiv = logger.bind(null, 'DIV', 'green');

const divElem = document.querySelector('.rect_div');
divElem.addEventListener('click', loggerGreyDiv, true);
divElem.addEventListener('click', loggerGreenDiv);

const pElem = document.querySelector('.rect_p');
pElem.addEventListener('click', loggerGreyP, true);
pElem.addEventListener('click', loggerGreenP);

const spanElem = document.querySelector('.rect_span');
spanElem.addEventListener('click', loggerGreySpan, true);
spanElem.addEventListener('click', loggerGreenSpan);

const clearBtnElem = document.querySelector('.clear-btn');
clearBtnElem.addEventListener('click', cleanEventsList);

const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
removeHandlersBtn.addEventListener('click', () => {
  removeHandlers.call(
    null,
    loggerGreySpan,
    loggerGreenSpan,
    loggerGreyP,
    loggerGreenP,
    loggerGreyDiv,
    loggerGreenDiv
  );
});

const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
attachHandlersBtn.addEventListener('click', () => {
  attachHandlers.call(
    null,
    loggerGreySpan,
    loggerGreenSpan,
    loggerGreyP,
    loggerGreenP,
    loggerGreyDiv,
    loggerGreenDiv
  );
});
