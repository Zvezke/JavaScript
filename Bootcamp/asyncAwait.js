const btnPlanet = document.querySelector("#planet");
const btnName = document.querySelector("#name");

async function getPlanets() {
  const result = await axios.get("https://swapi.dev/api/planets/"); //.data
  for (i of result.data.results) console.log(i);
  const { name, rotation_period, diameter } = result.data.results[i];
  console.log(name);
  console.log(rotation_period);
  console.log(diameter);
}

getPlanets();
