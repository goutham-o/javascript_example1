document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}

// document.body.addEventListener('click', deleteAll);

const deleteAll = document.querySelector('.clear-tasks');

deleteAll.addEventListener('click', deleteWhole)

function deleteWhole(e){
    console.log(e.target.parentElement.children[1].remove);
}