/* 
1. add event listener to the case plus button
2. get the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field

*/




document.getElementById('btn-phone-plus').addEventListener('click', function () {



    getExist('phone-total');
    getExist('phone-number-field');

    qnttyIncrement('phone-number-field', 'btn-phone-minus');
    priceIncreament('phone-total', price);

});


document.getElementById('btn-phone-minus').addEventListener('click', function () {



    getExist('phone-total');
    getExist('phone-number-field');

    qnttyDecrement('phone-number-field', 'btn-phone-minus');
    priceDecreament('phone-total', price);

});

