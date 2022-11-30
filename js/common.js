
let totalPrice = 0;
let subTotal = document.getElementById('sub-total').innerText;
subTotal = parseInt(subTotal);
let tax = 50;

document.getElementById('tax-amount').innerText = tax;

document.getElementById('final-total').innerText = subTotal + tax;





function getExist(inId) {
    qntty = document.getElementById(inId).value;
    // console.log(qntty);
    qntty = parseInt(qntty);
}





document.getElementById('btn-case-minus').setAttribute('disabled', true);
document.getElementById('btn-phone-minus').setAttribute('disabled', true);


function qnttyIncrement(id, id2) {
    qntty = qntty + 1;
    if (qntty >= 1) {
        document.getElementById(id2).removeAttribute('disabled');
    }
    console.log(qntty);
    document.getElementById(id).value = qntty;
}



function qnttyDecrement(id1, id) {
    if (qntty >= 2) {
        qntty = qntty - 1;
        if (qntty == 1) {
            document.getElementById(id).setAttribute('disabled', true);
        }
        console.log(qntty);
        document.getElementById(id1).value = qntty;
    }
    else {
        alert(" you cannot put a negetive value")

    }
}



function priceIncreament(id, price) {
    totalPrice = qntty * price;
    subTotal = subTotal + price;
    document.getElementById(id).innerText = totalPrice;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('final-total').innerText = subTotal + tax;

}


function priceDecreament(id, price) {
    totalPrice = qntty * price;
    console.log(totalPrice);
    document.getElementById(id).innerText = totalPrice;

    if (qntty >= 1) {
        subTotal = subTotal - price;
    }

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('final-total').innerText = subTotal + tax;
    console.log('decrement');
}

