// валидация полей формы

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');

const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorByFields = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validator = (fieldName, value) => {
  const validators = validatorByFields[fieldName];
  return validators
    .map((validatorFunc) => validatorFunc(value))
    .filter((errorText) => errorText)
    .join(', ');
};

const onEmailChange = (event) => {
  const textError = validator('email', event.target.value);

  emailErrorElem.textContent = textError;
};

const onPasswordChange = (event) => {
  const textError = validator('password', event.target.value);

  passwordErrorElem.textContent = textError;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

// в alert выводим значение, которые ввели в поля формы

const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();

  const formFields = [...new FormData(formElem)];

  const formData = formFields.reduce(
    (acc, [prop, value]) => ({ ...acc, [prop]: value }),
    {}
  );

  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
