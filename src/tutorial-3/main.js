document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const formInput = document.querySelector('.form__input');
  const todoList = document.querySelector('.todo-list');

  const listArray = [];

  const createElement = (text) => {
    const listElement = document.createElement('li');
    listElement.className = 'todo-list__item';
    listElement.innerHTML = `${text}<button class="removeBtn">x</button>`;
    return listElement;
  };

  const addTodo = (e) => {
    e.preventDefault();

    const inputText = formInput.value.trim();
    if (inputText !== '') {
      listArray.push(inputText);
      e.target.reset();
      formInput.focus();
    }
    todoList.innerHTML = '';
    render(listArray);
  };

  const render = (arr) => {
    if (arr.length === 0) {
      return;
    }
    arr.forEach((item) => {
      const listElement = createElement(item);
      todoList.appendChild(listElement);
    });
  };

  const removeTodo = (e) => {
    if (e.target.className === 'removeBtn') {
      e.target.parentElement.remove();
    }
  };

  form.addEventListener('submit', addTodo);
  todoList.addEventListener('click', removeTodo);
});
