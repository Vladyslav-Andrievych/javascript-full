export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

export const getInputElement = () => {
  const inputElems = document.querySelectorAll('input');

  const inputElem = [...inputElems].find(
    (elem) => elem.getAttribute('type') === 'text'
  );

  console.dir(inputElem);
  return inputElem;
};
