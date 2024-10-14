var x = document.getElementById("user_input");
var y = document.getElementById("user_input_2");
var plus = document.getElementById("math_operator_plus");
var minus = document.getElementById("math_operator_minus");
var divide = document.getElementById("math_operator_divide");
var times = document.getElementById("math_operator_times");
var power = document.getElementById("math_operator_power");

function display() {
  let var_1 = parseFloat(x.value);
  let var_2 = parseFloat(y.value);
  let w;
  if (math_operator_plus.checked) {
    w = var_1 + var_2;
  } else if (math_operator_minus.checked) {
    w = var_1 - var_2;
  } else if (math_operator_divide.checked) {
    w = var_1 / var_2;
  } else if (math_operator_times.checked) {
    w = var_1 * var_2;
  } else if (math_operator_power.checked) {
    w = var_1 * var_1;
  }

  document.getElementById("show").innerHTML = w; // This updates the h1 element to show the input value
}

/*
 */
