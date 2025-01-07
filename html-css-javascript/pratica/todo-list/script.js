'use strict';

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
let itemList = [];


const addItem = () => {
    if (taskInput.value === '') {
        alert('You need to write a task first.');
        buildList();
    } else if (itemList.some(i => i.task === taskInput.value)) {
        alert('This task already exists in your list!');
    } else {
        itemList.push({
            task: taskInput.value,
            done: false
        });

        taskInput.value = '';
        taskInput.focus();
        buildList();
    }
}

const buildList = () => {
    let newLi = '';

    itemList.forEach((item, index) => {
        newLi = newLi + `
            <li class="task" id="task-${index}">
                <div>
                    <span class="material-symbols-outlined" onclick="completeTask(${index})">
                        done
                    </span>
                    <p class="${item.done && 'done'}">${item.task}</p>
                </div>
                <i class="material-symbols-outlined" onclick="deleteTask(${index})">close</i>
            </li>
        `
    })
    
    taskList.innerHTML = newLi;

    localStorage.setItem('list', JSON.stringify(itemList));

    keepUnfinishedTasks();
    
}


const completeTask = (position) => {
    itemList[position].done = !itemList[position].done;

    buildList();
}


const deleteTask = (position) => {
    itemList.splice(position, 1);
    buildList();
}


const reloadTasks = () => {
    const localTasks = localStorage.getItem('list');
    
    if (localTasks) {
    itemList = JSON.parse(localTasks);
    }
    
    buildList();
}


const keepUnfinishedTasks = () => {
    const items = JSON.parse(localStorage.getItem('list'));
    let unfinishedTasks = 0;

    for (const item of items) {
        if (item.done === false) {
            unfinishedTasks++;
        }
    }
    
    document.getElementById('unfinishedTasks').innerHTML = unfinishedTasks;
}


reloadTasks();
taskInput.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        addItem();
    }
})
addTaskBtn.addEventListener('click', addItem);