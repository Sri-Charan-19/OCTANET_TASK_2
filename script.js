const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task with due date
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const currentDate = new Date();
    const dueDate = currentDate.toLocaleDateString();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<span>${taskText}</span> - <span>Due: ${dueDate}</span>`;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

// Mark task as complete
taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('taskComplete');
    }
});

// Delete task
taskList.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
