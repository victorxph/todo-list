function setTheme() {

    let root = document.documentElement;

    let newTheme = root.className === 'purple' ? 'grey' : 'purple';

    root.className = newTheme;

}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', setTheme);

let taskInput = document.querySelector('.todo-input');

let taskInputValue;

let uncompletedContainer = document.querySelector('.uncompleted-container');

let todoItem = document.querySelector('.todo-item');

taskInput.addEventListener('keydown', (e) => {

    if (e.key === 'Enter'){

        console.log('fds');
        
        let clonedTodo = todoItem.cloneNode(true);

        let todoLabel = clonedTodo.querySelector('.todo-label')

        todoLabel.textContent = taskInput.value;

        uncompletedContainer.appendChild(clonedTodo);

        taskInput.value = '';
    }

});

let closeX = document.querySelector('.close-x');

closeX.addEventListener('click', removeTodo);

function removeTodo(e) {

    console.log(e.target.parentNode);

    e.preventDefault();

    let parent = e.target.parentNode;

    parent.remove();

};