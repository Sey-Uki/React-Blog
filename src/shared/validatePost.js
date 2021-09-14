var pattern = new RegExp(/^\d/);

export function validateTitle(value) {
  let error;
  if (!value) {
    error = "Поле не должно быть пустым!";
  } else if (value.length < 3) {
    error = "Название поста слишком короткое!";
  }
  if (pattern.test(value)) {
    error = "Текст не может начинаться с цифры";
  }
  return error;
}

export function validateDescription(value) {
  let error;
  if (!value) {
    error = "Поле не должно быть пустым!";
  } else if (value.length < 150) {
    error = "Текст должен содержать более 150 символов!";
  }
  return error;
}

export function validateUsername(value) {
  let error;
  if (!value) {
    error = "Поле не должно быть пустым!";
  } else if (pattern.test(value)) {
    error = "Текст не может начинаться с цифры";
  } 
  return error;
}

export function validateAge(value) {
  let error;
  if (value<=0 || value>130) {
    error = "Введите правильно";
  } 
  return error;
}

export function validateEmail(value) {
  let error;
  if (!value) {
    error = "Поле не должно быть пустым!";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
  ) {
    error = "Неправильно введена почта";
  }
  return error;
}

export function validatePassword(value) {
  let error;
  if (!value) {
    error = "Поле не должно быть пустым!";
  } else if (value.length<8) {
    error = "Пароль должен быть больше 8 символов";
  } 
  return error;
}

export function validateConfirmPassword(value) {
  let error;
  if (value.password !== value.confirmPassword) {
    error = "Пароль должен совпадать";
  } 
  return error;
}