document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const formInput = document.querySelector('.form__input');
  const todoList = document.querySelector('.todo-list');

  const listArray = [];

  const createElement = (text) => {
    const listElement = document.createElement('li');
    listElement.className = 'todo-list__item';
    listElement.innerHTML = `
      ${text}
      <button class="removeBtn">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>`;
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
      const todoText = e.target.parentElement.textContent.trim();
      listArray.forEach((item, index) => {
        if (todoText === item) {
          listArray.splice(index, 1);
        }
      });
      e.target.parentElement.remove();
    }
  };

  form.addEventListener('submit', addTodo);
  todoList.addEventListener('click', removeTodo);
});
