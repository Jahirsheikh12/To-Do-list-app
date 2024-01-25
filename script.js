
let btn = document.getElementById('btn');

let task = document.getElementById('task');

let input = document.getElementById('todo');

// function to add the task 

const AddTask = () => {
  if (input.value === "") {
    alert("Please Enter some text");
  }
  else {
    let inputTask = input.value;

    let createli = document.createElement('li')

    createli.innerHTML = inputTask;

    task.append(createli);

    let span = document.createElement('span');

    span.innerHTML = "\u00d7"

    createli.append(span);

  }
    input.value = "";

    saveTask();

};

btn.addEventListener('click', AddTask);

// Saving the Task

function saveTask() {
  localStorage.setItem("data", task.innerHTML);
}

// TO show the saved task

function showTask() {
  task.innerHTML = localStorage.getItem("data");
}

showTask();

// toggle the task and removing the task

task.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    saveTask();
  }
 else if (e.target.nodeName === 'SPAN') {
    e.target.parentElement.remove();
    saveTask();
  }
})

