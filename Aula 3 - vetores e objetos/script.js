// O que sao vetores ou arrays

//  declarando um array
// let array = ['string', 1, true];
// console.log(array);

// pode guardar varios tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
// // console.log(array);

// // Foreach
// array.forEach(function (item, index) { console.log(item, index) });

// // Push
// array.push('novo item');
// console.log(array);

// // Pop
// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift('novo item no inicio');
// console.log(array);

// console.log(array.indexOf(true));

// array.splice(0, 3);
// console.log(array);

// let novoArray = array.slice(0, 3);
// console.log(novoArray);

let object = {
    string: 'string', numer: 1, boolean: true, array: ["array"], objectInterno: { objectInterno: 'objeto interno' }
};

// console.log(object.boolean);

// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);