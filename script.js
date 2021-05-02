;
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelectorAll('.form');

    form[0].addEventListener('submit', e => {
        e.preventDefault();

        let arrFormData = {};

        for(let i = 0; i < form[0].length; i++){
            let name = form[0][i].name;
            let value = form[0][i].value;

            arrFormData[name] = value;
        }
        let body = JSON.stringify(arrFormData);

        fetch(form[0].action, {
            method: 'POST',
            body,
        }).then(response => {
            console.log(response);
        }).catch(() => {
            console.log(`don't send`);
        })
    });
})







