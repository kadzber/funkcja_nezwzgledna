Fetch_data();

async function Fetch_data() {
  try {
    const player_name = document.getElementById("nickmane").value;
    const response = await fetch(
      `https://playerdb.co/api/player/minecraft/${player_name}`
    );

    if (!response.ok) {
      throw new error("probably bad username");
    }

    const data = await response.json();
    console.log(data);

    const player_info = data.data.player.id;
    document.getElementById("show").innerHTML = player_info;
    console.log(player_info);
  } catch (error) {
    console.log(error);
  }
}
