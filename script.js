const display = document.querySelector("#display");

function addToDisplay(i) {
  display.value += i;
}

function clearDisplay() {
  display.value = "";
  console.log("hi");
}

function calcDisplay() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
