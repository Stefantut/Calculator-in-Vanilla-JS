// declare variables
var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("calc-display-val");

var displayVal = "0"; // declare variable to display 0 by default
var pendingVal; // declare the pending variable
var evalStringArray = []; // holding the operations that were pressed

// reference classes
var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

// set updateDisplayVal function -  to see if calculator is working
var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;

  if (displayVal === "0") displayVal = ""; // delete 0 when type a button

  displayVal += btnText;
  displayValElement.innerText = displayVal; // update html element with displayVal
};

// perform the arithmic
var performOperation = (clickObj) => {
  var operator = clickObj.target.id;

  switch (operator) {
    case "calc-plus":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;

    case "calc-minus":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;

    case "calc-multiply":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;

    case "calc-divide":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;

    case "calc-equals":
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(" ")); // ['2', '+', '3'] => '2 + 3'
      displayVal = evaluation + ""; // update displayVal as it was a string
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;

    default:
      break;
  }
};

// click function for calcNumBtns - event listener
for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

// click function for calcOperatorBtns - event listener
for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener("click", performOperation, false);
}

// clear button function
clearBtn.onclick = () => {
  displayVal = "0";
  pendingVal = undefined; // since we clear everything
  evalStringArray = []; //default
  displayValElement.innerHTML = displayVal; // update displayVal
};

// backspace button function
backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1); //using slice method to get rid of last typed number

  if (displayVal === "") displayVal = "0"; //to have at least number 0 visible

  displayValElement.innerText = displayVal; //update
};

// decimal button function
decimalBtn.onclick = () => {
  if (!displayVal.includes(".")) displayVal += ".";
  displayValElement.innerHTML = displayVal; // update displayVal
};
