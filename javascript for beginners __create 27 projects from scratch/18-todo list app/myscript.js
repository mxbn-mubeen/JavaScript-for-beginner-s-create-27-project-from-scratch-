// This is a JavaScript file that contains the logic for the todo list application

// Function to retrieve tasks from local storage
function get_todos() {
    var todos = new Array; // Creates an empty array to store tasks
    var todos_str = localStorage.getItem('todo'); // Retrieves tasks from local storage
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); // Parses JSON string into an array
    }
    return todos; // Returns the array of tasks
}

// Function to add a new task
function add() {
    var task = document.getElementById('task').value; // Retrieves the task from the input field
    var todos = get_todos(); // Retrieves the array of tasks from local storage
    todos.push(task); // Adds the new task to the array
    localStorage.setItem('todo', JSON.stringify(todos)); // Updates local storage with the modified array
    show(); // Calls the show() function to update the displayed list of tasks
    return false; // Prevents form submission
}

// Function to remove a task
function remove() {
    var id = this.getAttribute('id'); // Retrieves the index of the task to be removed
    var todos = get_todos(); // Retrieves the array of tasks from local storage
    todos.splice(id, 1); // Removes the task at the specified index
    localStorage.setItem('todo', JSON.stringify(todos)); // Updates local storage with the modified array
    show(); // Calls the show() function to update the displayed list of tasks
    return false; // Prevents form submission
}

// Function to display the list of tasks
function show() {
    var todos = get_todos(); // Retrieves the array of tasks from local storage
    var html = '<ul>'; // Initializes an HTML string to create a list
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>'; // Creates list items with task names and delete buttons
    }
    html += '</ul>'; // Closes the list
    document.getElementById('todos').innerHTML = html; // Updates the HTML content of the 'todos' div with the generated list
    var buttons = document.getElementsByClassName('remove'); // Retrieves all the delete buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove); // Adds a click event listener to each delete button
    }
}

// Adds a click event listener to the "Add Task" button that calls the add() function
document.getElementById('add').addEventListener('click', add);
// Calls the show() function to initially display the list of tasks
show();