let textElement = document.querySelector('textarea')
let output = document.querySelector('.output');
let outputP = document.querySelector('.output p');
let btnEn = document.querySelector('#btn1');
let btnDec = document.querySelector('#btn2');
let text, textValue;
let errorElement = document.querySelector('.error')

function wait(){
    errorElement.style.display = 'none';
}


btnEn.addEventListener('click', ()=>{
    if((textElement.value) == ''){
        errorElement.style.display = 'flex';
        setTimeout(wait,2000)
    }else{
        textValue = textElement.value;
        output.style.display = 'flex';
        text = textElement.value;
        text = text.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/A/g, 'ai').replace(/E/g, 'enter').replace(/I/g, 'imes').replace(/O/g, 'ober').replace(/U/g, 'ufat');
        textElement.value = ''
        outputP.innerHTML = `${text}`

    }
});
output.addEventListener('click', ()=>{
    navigator.clipboard.writeText(text);
});
btnDec.addEventListener('click',()=>{
    
    output.style.display = 'none';
    outputP.innerHTML = ``
    textElement.value = textValue;
})
