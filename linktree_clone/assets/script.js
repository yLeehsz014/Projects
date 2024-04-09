let slider = document.querySelector('.slider')
slider.addEventListener('click', toggleTheme);
function toggleTheme() {
    let bodyElement = document.getElementsByTagName('body')[0];
    let container = document.querySelector('.container');
    let pElement = document.getElementsByTagName('p')[0];
    let aElements = document.querySelectorAll('a');
    let divElements = document.querySelectorAll('.icon');
    let h = document.getElementsByTagName('h4')[0]
        bodyElement.classList.toggle('body-light')
        container.classList.toggle('container-light')
        pElement.classList.toggle('p-light')
        aElements.forEach((a) => {
            a.classList.toggle('a-light')
        });
        h.classList.toggle('h4-light');
        if (bodyElement.classList.contains('body-light')) {
            divElements[0].innerHTML = '<i class="fa-brands fa-github" style="color: #000000;"></i>'
            divElements[1].innerHTML = '<i class="fa-solid fa-code" style="color: #000000;"></i>'
            divElements[2].innerHTML = '<i class="fa-brands fa-linkedin-in" style="color: #000000;"></i>'
            divElements[3].innerHTML = '<i class="fa-brands fa-instagram" style="color: #000000;"></i>'
        } else {
            divElements[0].innerHTML = '<i class="fa-brands fa-github" style="color: #ffffff;"></i>'
            divElements[1].innerHTML = '<i class="fa-solid fa-code" style="color: #ffffff;"></i>'
            divElements[2].innerHTML = '<i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>'
            divElements[3].innerHTML = '<i class="fa-brands fa-instagram" style="color: #ffffff;"></i>'
        }
}

