const KEY = "3036986330a5ddecda0e1cf1c3e9b2ee";
let spinner_border = document.querySelector(".spinner-border");
const get_api = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather?q=";
  spinner_border.classList.remove("d-none");
  const query = `${city}&units=metric&appid=${KEY}`;
  const get_fetch = await fetch(base + query);
  spinner_border.classList.add("d-none");
  document.querySelector(".container").classList.add("opacity-100");
  return await get_fetch.json();
};
