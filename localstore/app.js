// set local storage item

// localStorage.setItem('name','john');

// get from local storage
/* const name = localStorage.getItem('name');
console.log(name); */


// set session storage item
// sessionStorage.setItem('name','Beth');


// remove from from local storage
// localStorage.removeItem('name');


// clear localStorage 
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    
    const task = document.querySelector('#task').value;
    
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.querySelector('#task').value = '';
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);     
})