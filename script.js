
(() => {
  const btn = document.querySelector("[data-form-btn]");

  const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    const taskContent = document.createElement('div');
    taskContent.appendChild(check());
    const span = document.createElement('span');
    span.classList.add('task');
    span.innerText = value;
    taskContent.appendChild(span);


    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task)


    input.value = '';

  }



  btn.addEventListener("click", createTask);

  const check = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i
  }

  const completeTask = (e) => {
    const element = e.target
    console.log(element);
    element.classList.toggle('completeIcon')
  }

  const deleteIcon = () => {

    const i = document.createElement('i')
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask)
    return i

  }

  const deleteTask = (evento) => {
    const parent = evento.target.parentElement;

    parent.remove();
  }

})()