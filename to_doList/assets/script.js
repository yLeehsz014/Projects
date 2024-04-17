let buttonElement = document.querySelector('#button');
let inputElement = document.querySelector('#txt');
inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
buttonElement.addEventListener('click', addTask);


function addTask() {
    if (inputElement.value == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must add some task first!",
            width: 300,
        });
    } else {
        let uElement = document.getElementsByTagName('ul')[0];
        let newLi = document.createElement('li');
        newLi.innerHTML = inputElement.value;
        uElement.appendChild(newLi);    
        let newTrash = document.createElement('img');
        newTrash.src = './assets/img/trash.png';
        newLi.appendChild(newTrash);
        newLi.addEventListener('click', function(){
            newLi.classList.toggle('checked');
        });
        newTrash.addEventListener('click', function(){
            newLi.remove();
        });
    }
    inputElement.value = '';
}
