const form = document.getElementById('form-exercicio-html-js');

let formvalid = false;

function valid(campoA, campoB) {
    return campoB > campoA;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);

    if (valid(campoA, campoB)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
})