const Day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var d = new Date();
let day = d.getDay();
let day_name = Day_list[day];
const Formated = `${day_name}`;
let Day_desc;

console.log(Formated);

if (Formated == "Sun") {
  Day_desc = `
    <div class="day-description">
      <div class="start-lesson">
        <h2>Start lekcji: 7:10</h2>
      </div>
      <div class="lessons">
        <ul>
          <li>Język hiszpański</li>
          <li>Biznes i zarządzanie</li>
          <li>Język angielski</li>
          <li>Informatyka</li>
          <li>Pracownia podstaw programowania</li>
          <li>Język polski</li>
          <li>Geografia</li>
          <li>Matematyka</li>
        </ul>
      </div>
      <div class="summary">
        <p>Podsumowanie: jest polski i matma, ale jest dużo lekcji zapychających.</p>
      </div>
    </div>`;
} else if (Formated == "Mon") {
  Day_desc = `
    <div class="day-description">
      <div class="start-lesson">
        <h2>Start lekcji: 9:50</h2>
      </div>
      <div class="lessons">
        <ul>
          <li>Bezpieczeństwo i higiena pracy</li>
          <li>Religia</li>
          <li>Wychowanie fizyczne</li>
          <li>Matematyka</li>
          <li>Język polski</li>
          <li>Projektowanie aplikacji internetowych</li>
        </ul>
      </div>
      <div class="summary">
        <p>Podsumowanie: krótki dzień, PAMIĘTAĆ O SIŁOWNI i o odrobieniu matmy.</p>
      </div>
    </div>`;
} else if (Formated == "Tue") {
  Day_desc = `
    <div class="day-description">
      <div class="start-lesson">
        <h2>Start lekcji: 8:00</h2>
      </div>
      <div class="lessons">
        <ul>
          <li>Historia</li>
          <li>Wychowanie fizyczne</li>
          <li>Podstawy programowania i algorytmika</li>
          <li>Projektowanie i administrowanie bazami</li>
          <li>Fizyka</li>
          <li>Język angielski</li>
        </ul>
      </div>
      <div class="summary">
        <p>Podsumowanie: NUDY.</p>
      </div>
    </div>`;
} else if (Formated == "Wed") {
  Day_desc = `
    <div class="day-description">
      <div class="start-lesson">
        <h2>Start lekcji: 8:00</h2>
      </div>
      <div class="lessons">
        <ul>
          <li>Język hiszpański</li>
          <li>Historia i teraźniejszość</li>
          <li>Chemia</li>
          <li>Wychowanie fizyczne</li>
          <li>Religia</li>
          <li>Projektowanie aplikacji internetowych</li>
          <li>Pracownia aplikacji internetowych</li>
        </ul>
      </div>
      <div class="summary">
        <p>Podsumowanie: Bardzo długi dzień, nudy, praktyki.</p>
      </div>
    </div>`;
} else if (Formated == "Thu") {
  Day_desc = `
    <div class="day-description">
      <div class="start-lesson">
        <h2>Start lekcji: 7:10</h2>
      </div>
      <div class="lessons">
        <ul>
          <li>Biologia</li>
          <li>Wychowanie fizyczne</li>
          <li>Język angielski</li>
          <li>Informatyka</li>
        </ul>
      </div>
      <div class="summary">
        <p>Podsumowanie: dzień pełen różnych zajęć.</p>
      </div>
    </div>`;
} else if (Formated == "Fri") {
  Day_desc = `
    <div class="day-description">
      <div class="start-lesson">
        <h2>WEEKEND</h2>
      </div>
    </div>`;
} else if (Formated == "Sat") {
  Day_desc = `
    <div class="day-description">
      <div class="start-lesson">
        <h2>WEEKEND</h2>
      </div>
    </div>`;
}
document.getElementById("show").innerHTML = Day_desc;
