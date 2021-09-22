// Отрисовка арены

const arenaElem = document.querySelector('.arena');

const generateArrayOfNumbers = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
};

const getLineSeat = () =>
  generateArrayOfNumbers(1, 10)
    .map(
      (seatNumber) => `
        <div
            class="sector__seat"
            data-seat-number="${seatNumber}"
        ></div>
    `
    )
    .join('');

const getSectorLine = () => {
  const lineSeats = getLineSeat();

  return generateArrayOfNumbers(1, 10)
    .map(
      (lineNumber) => `
        <div
            class="sector__line"
            data-line-number="${lineNumber}"
        >${lineSeats}</div>
    `
    )
    .join('');
};

const renderArena = () => {
  const sectorLines = getSectorLine();

  const renderedMarkUp = generateArrayOfNumbers(1, 3)
    .map(
      (sectorNumber) => `
        <div
            class="sector"
            data-sector-number="${sectorNumber}"
        >${sectorLines}</div>
    `
    )
    .join('');

  arenaElem.innerHTML = renderedMarkUp;
};

renderArena();

// Выбирая любое место сектора, получаем номера сектора, ряда и места

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const spanSelectedSeatElem = document.querySelector('.board__selected-seat');

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  spanSelectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);
