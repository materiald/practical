document.querySelector('#greeting-form').addEventListener('submit', e => {
    let fn = e.target.elements.firstname.value;
    let ln = e.target.elements.lastname.value;
    let greeting = 'hello ';

    greeting += fn + ' ' +ln;
    
    greeting += '!';

    document.querySelector('#greeting').textContent = greeting;

});


