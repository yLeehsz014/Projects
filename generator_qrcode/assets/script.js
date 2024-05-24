
const boxes = document.querySelectorAll('.box');
let container = document.querySelector('.generate');
let image = document.createElement('img');
boxes.forEach(box => {
    box.addEventListener('click', function (e) {
        let clicked = e.target;
        container.style.animation = 'none';
        container.offsetHeight;
        container.style.animation = 'appearBottom .5s cubic-bezier(0.8, 0.1, 0.8, 0.8)';
        if (clicked.classList.contains("one")) {
            divCheck = document.querySelector('#add1')
            document.querySelector('#add2').classList.remove('img')
            divCheck.classList.toggle('img')
            document.querySelector('#type').innerHTML = 'URL'
            document.querySelector('#txt_in').placeholder = 'Your URL here'
            document.querySelector('#txt_in').value = ''
            image.src = ''
            image.style.outline = 'none';
            image.style.outlineOffset = 'none';

        } else {
            divCheck = document.querySelector('#add2')
            divCheck.classList.toggle('img')
            document.querySelector('#add1').classList.remove('img')
            document.querySelector('#type').innerHTML = 'text'
            document.querySelector('#txt_in').placeholder = 'Your text here'
            document.querySelector('#txt_in').value = ''
            image.src = ''
            image.style.outline = 'none';
            image.style.outlineOffset = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const btnGenerator = document.querySelector('#btn_in');
    btnGenerator.addEventListener('click', () => {
        let txt = document.querySelector('#txt_in');
        const loadingMessage = document.querySelector('#loadingMessage');
        const containerQr = document.querySelector('#qrCodeContainer');

        if (txt.value === '') {
            alert('[ERROR] Type something on the input');
        } else {
            loadingMessage.style.display = 'block';
            const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
            image.src = api+(txt.value);

            image.onload = () => {
                loadingMessage.style.display = 'none';
                containerQr.innerHTML = '';
                containerQr.appendChild(image);
                image.style.outline = '3px solid gray';
                image.style.outlineOffset = '5px';
            };

        }
    });
});
