// Global variable
let abc = 9;
const PI = 3.1425;

function show(){
    let age = 99; //age: is a local variable
    abc++;
    console.log('inside function=' , abc);
    console.log('inside age=' , age);
    age++;
    console.log('inside age++=' , age);
}

show();

abc++;
age++;


console.log('outside function=' , abc);

// console.log('outside age=' , age);











// keyword = reserverd words



// const PI = 3.142;
// // PI = 9.8; // error
// console.log(PI)


// let x = 60;
// x='hello stringlsldf ';
// x = true;

// console.log(x);

//var x = 60;
// x='hello stringlsldf ';
// x = true;

// console.log(window.x);




