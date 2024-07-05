let icon = document.querySelector("#icon");
let body = document.querySelector(".hero");
let about = document.querySelector('.about');
let links = document.querySelectorAll('a');
let back_color = true;

icon.addEventListener('click', () => {
    if (back_color) {
        body.style.backgroundColor = 'black';
        back_color = false;
        icon.style.color = 'white';
        about.style.color = 'white';
        links.forEach(link => link.style.color = 'white');
    } else {
        body.style.backgroundColor = '#edf2fc';
        back_color = true;
        icon.style.color = 'black';
        about.style.color = 'black';
        links.forEach(link => link.style.color = 'black');
    }
});
