let price = document.getElementById('phone-total').innerText;

price = parseInt(price);
let qntty = 1;


let casePrice = document.getElementById('case-total').innerText;
casePrice = parseInt(casePrice);


document.getElementById('btn-case-plus').addEventListener('click', function (e) {
    getExist('case-number-field');
    qnttyIncrement('case-number-field', 'btn-case-minus');
    priceIncreament('case-total', casePrice);
    e.stopPropagation();
});



document.getElementById('btn-case-minus').
    addEventListener('click', function () {
        getExist('case-total');
        getExist('case-number-field');
        qnttyDecrement('case-number-field', 'btn-case-minus');
        priceDecreament('case-total', casePrice);
    });