function myFunc(WartoscBezwgledna) {
  let x = WartoscBezwgledna;

  let liczba_bazwzgledna;

  if (x < 0) {
    liczba_bazwzgledna = -1 * x;
  } else {
    liczba_bazwzgledna = x;
  }

  let wynik;

  if (x < 0) {
    document.write(
      "liczba bezwzgledna z" +
        "‎ " +
        x +
        "‎ " +
        "wynosi" +
        "‎ " +
        liczba_bazwzgledna
    );
  } else {
    document.write("liczba jest dodatnia");
  }

  let element = document.getElementById("wynik");
  element.textContent = wynik; // Uaktualnij zawartość elementu
}

let wynik;

document.getElementById("calculate_btn").addEventListener("click", function () {
  // Pobierz wartość z pola wejściowego
  let inputValue = document.getElementById("liczba_input").value;
  // Zamień na liczbę
  myFunc(Number(inputValue)); // Przekaż wartość jako liczbę do funkcji
  document.getElementById("demo").innerHTML = myFunc;
});
