Add = () => {
  var x = parseInt(document.getElementById("user_input").value);
  var y = parseInt(document.getElementById("user_input_2").value);
  let result;

  result = x + y;

  document.getElementById("show").innerHTML = result;
};

Minus = () => {
  var x = parseInt(document.getElementById("user_input").value);
  var y = parseInt(document.getElementById("user_input_2").value);
  let result;

  result = x - y;

  document.getElementById("show").innerHTML = result;
};

Multiply = () => {
  var x = parseInt(document.getElementById("user_input").value);
  var y = parseInt(document.getElementById("user_input_2").value);
  let result;

  result = x * y;

  document.getElementById("show").innerHTML = result;
};

divide = () => {
  var x = parseInt(document.getElementById("user_input").value);
  var y = parseInt(document.getElementById("user_input_2").value);
  let result;

  result = x / y;
  document.getElementById("show").innerHTML = result;
};

power = () => {
  var x = parseInt(document.getElementById("user_input").value);
  var y = parseInt(document.getElementById("user_input_2").value);
  let result;

  result = x * x || y * y;
  document.getElementById("show").innerHTML = result;
};

absolute_value = () => {
  var x = parseInt(document.getElementById("user_input").value);
  var y = parseInt(document.getElementById("user_input_2").value);
  let result;

  if (x || y < 0) {
    result = x * -1 || y * -1;
  } else {
    result = "number is positive";
  }
  document.getElementById("show").innerHTML = result;
};
