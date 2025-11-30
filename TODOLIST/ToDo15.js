document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todoList = document.getElementById('todoList');
    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a valid task before adding.");
            return;
        }
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.setAttribute('data-action', 'complete');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.setAttribute('data-action', 'delete');
        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(deleteBtn);
        listItem.appendChild(taskSpan);
        listItem.appendChild(actionsDiv);
        todoList.appendChild(listItem);
        taskInput.value = '';
    }
    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            addTask();
        }
    });

    todoList.addEventListener('click', function(event){
        const clickedElement = event.target;
        if (clickedElement.tagName === 'BUTTON') {
            const action = clickedElement.getAttribute('data-action');
            const listItem = clickedElement.closest('li');
            if (!listItem) return;
            if (action === 'delete') {
                todoList.removeChild(listItem);
            } else if (action === 'complete') {
                listItem.classList.toggle('completed');
                if (listItem.classList.contains('completed')) {
                    clickedElement.textContent = 'Undo';
                    clickedElement.classList.add('undo');
                } else {
                    clickedElement.textContent = 'Complete';
                    clickedElement.classList.remove('undo');
                }
            }
        }
    });
});