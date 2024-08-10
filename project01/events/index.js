// console.log(window);

function helloHandle() {
  console.log("key down!");
}

function hello2Handle() {
  console.log("key up!");
}

function myFocusHandler(e) {
  console.dir(e);
  e.style.backgroundColor = "yellow";
}

function myBlurHandler(e) {
  console.log("blur");
  e.style.backgroundColor = "blue";
}

function valHandler(e) {
  const val = parseInt(e.value);
  console.log(val);

  if (val) {
    if (val > 0) {
      e.style.backgroundColor = "green";
    } else if (val < 0) {
      e.style.backgroundColor = "red";
    } else {
      e.style.backgroundColor = "blue";
    }
  }
}

// function moveHandler(e){
// console.log("On mouse Enter handle");
// e.style.backgroundColor = 'green'
// }


function mHandler(e){
    // console.log(e);
    // console.warn(e);
    // console.error(e);
    console.dir(e);
    // console.table(e);
    const text = e.innerText;
    console.dir(text);
}