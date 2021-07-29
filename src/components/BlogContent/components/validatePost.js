export function validateTitle(value) {
  let error;
  var pattern = new RegExp(/^\d/);
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
