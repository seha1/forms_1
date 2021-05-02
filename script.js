;
document.addEventListener('DOMContentLoaded', () => {
    let subBtn = document.getElementById('submit');
    let form = document.querySelectorAll('.form');


    form[0].addEventListener('submit', e => {
        e.preventDefault();

        const body = new FormData(form[0]);

        fetch(form[0].action, {
            method: 'POST',
            body
        }).then(response => {
            console.log(response);
        }).catch(() => {
            console.log(`don't send`);
        })
    });
})







