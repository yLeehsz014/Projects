const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const mail = document.querySelector('#adress');
    const txtarea = document.querySelector('#msg');
    let email = "@";
    let itsEmail = mail.value.includes(email);
    console.log(itsEmail)
    if(fname.value === ''){
        const errors = document.querySelectorAll('.error')[0]
        errors.style.display = 'inherit';
    }
    if(lname.value === ''){
        const errors = document.querySelectorAll('.error')[1]
        errors.style.display = 'inherit';
    }
    if(mail.value === '' || itsEmail === false){
        const errors = document.querySelectorAll('.error')[2]
        errors.style.display = 'inherit';
    }
    if(!document.querySelector('#ig').checked && !document.querySelector('#is').checked){
        const errors = document.querySelectorAll('.error')[3]
        errors.style.display = 'inherit';
    }
    if(txtarea.value === ''){
        const errors = document.querySelectorAll('.error')[4]
        errors.style.display = 'inherit';
    }
    if(!document.querySelector('#checkb').checked){
        const errors = document.querySelectorAll('.error')[5]
        errors.style.display = 'inherit';
    }
})