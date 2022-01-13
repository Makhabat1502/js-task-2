let cardNumber = '4169 2547 5896 1236';
let cardNumReplace = cardNumber.replace(cardNumber.substring(0, 14), '************');
console.log(cardNumReplace);