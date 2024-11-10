Fetch_data();

async function Fetch_data() {
  try {
    const city = document.getElementById("city").value;
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${city}`
    );

    if (!response.ok) {
      throw new Error("uneable to fetch data");
    }

    const data = await response.json();
    const temperature = data.temperature;
    const wind = data.wind;
    const description = data.description;

    const all = temperature + "<br>" + wind + "<br>" + description;

    document.getElementById("show_resoult").innerHTML = all;
  } catch (error) {}
}
