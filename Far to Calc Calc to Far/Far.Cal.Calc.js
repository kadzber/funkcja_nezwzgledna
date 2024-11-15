const Cel_Far = () => {
  let Celcuis = parseInt(document.getElementById("Celcius").value);

  if (isNaN(Celcuis)) {
    document.getElementById("show").innerHTML =
      "Please enter a valid Celsius value!";
    return;
  }

  let Far_Con_Calc = (Celcuis * 9) / 5 + 32;

  document.getElementById("show").innerHTML =
    Celcuis + "°C = " + Far_Con_Calc + "°F";
};

const Far_Cal = () => {
  let Faranhait = parseInt(document.getElementById("Faranhait").value);

  if (isNaN(Faranhait)) {
    document.getElementById("show").innerHTML =
      "Please enter a valid Fahrenheit value!";
    return;
  }

  let Cel_Con_Calc = (Faranhait - 32) * (5 / 9);

  document.getElementById("show").innerHTML =
    Faranhait + "°F = " + Cel_Con_Calc + "°C";
};
