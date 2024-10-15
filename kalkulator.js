var x = document.getElementById("user_input");
var y = document.getElementById("user_input_2");
const plus = document.getElementById("math_operator_plus");
const minus = document.getElementById("math_operator_minus");
const divide = document.getElementById("math_operator_divide");
const times = document.getElementById("math_operator_times");
const power = document.getElementById("math_operator_power");

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

  document.getElementById("show").innerHTML = w;
}
