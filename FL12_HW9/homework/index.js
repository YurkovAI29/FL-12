let a = 1;
let b = 2;
let c = 3;
let d = 4;
let i = 5;
let f = 6;
let g = 7;
let h = 8;
let z = 0;
let x = 30;
let year = 2019;
let j = 10;

function convert() {
    let newArr = [];

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            newArr.push('' + arguments[i]);
        } else if (typeof arguments[i] === 'string') {
            newArr.push(parseInt(arguments[i])); 
        }
    }

    return newArr;
}
convert('1', b, c, '4');


function executeforEach(arr, func) {
    for (let i = 0; i <= arguments.length; i++) {
        func(arr[i]);
    }
}
executeforEach([a, b, c], el => { 
    console.log(el * b);
});
 
function mapArray(arr, func) {
    let newArr = [];
    
    executeforEach(arr, function (el) {
        newArr.push(func(+el));
    });

    return newArr;
}
mapArray([b, '5', h], el => {
    return el + c;
});

function filterArray(arr, func) {
    let newArr = [];

    executeforEach(arr, function (el) {
        if (func(el)) {
            newArr.push(el);
        }
    });

    return newArr;
}
filterArray([b, i, h], el => {
     return el % b === z; 
    }); 

function flipOver(str) {
    let newStr = '';

    for (let i = str.length - 1; i >= z; i--) {
        newStr += str[i];
    }

    return newStr;
}
flipOver('hey world');

function makeListFromRange(arr) {
    let newArr = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }

    return newArr;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];

function getArrayOfKeys(arr, key) {     
    let newArr = [];

    executeforEach(arr, function (el) {
            newArr.push(el[key]);  
    });

    return newArr;
}
getArrayOfKeys([actors, `name`]);

function substitute(arr) {
    let newArr = [];

    mapArray(arr, el => {
        if (el < x) {
            newArr.push('*');
        } else {
            newArr.push(el);
        }
    });

    return newArr;
}

const date = new Date(year, 0, b);

function getPastDay(date, days) {
    let pastDate = new Date(date);

    pastDate.setDate(date.getDate() - days);
    return pastDate.setDate();
}
getPastDay(date, 1); 

function formatDate(time) {
    let min = time.getMinutes();
    let hour = time.getHours();

    if (min < j) {
        '0' + time.getMinutes();
    } else {
        time.getMinutes(); 
    }

    if (hour < j) {
        '0' + time.getHours();
    } else {
        time.getHours();
    }

    return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${hour}:${min}`;
}