let executed = false;
let novaSenha = ''; 

let qtChar = document.querySelector('#qt');
let range = document.querySelector('#range');
qtChar.innerHTML = Number(range.value);
range.oninput = function(){
    qtChar.innerHTML = this.value;
}
function generatePass() {
    executed = true; 
    let radioOp = document.getElementsByTagName('input');
    let senhaGerada = '';
    let passBox = document.querySelector('.pass');
    let charset; 
    if (radioOp[0].checked) {
        charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    } else {
        charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$.*';
    }

    for (let i = 0, n = charset.length; i < range.value; ++i) {
        senhaGerada += charset.charAt(Math.floor(Math.random() * n))
    }
    novaSenha = senhaGerada;
    passBox.innerHTML = senhaGerada;
   
}

function pastePass() {
    if (executed) {
        alert('Password pasted');
        navigator.clipboard.writeText(novaSenha);
    } else {
        alert('You must generate a password first!');
    }
}


