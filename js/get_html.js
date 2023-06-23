let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let in_value = e.target.input_city.value.trim();
  if (form.input_city.value != "") {
    get_api(in_value).then((data) => {
      let { name, weather, main } = data;
      document.querySelector(".api_data").innerHTML = `
        <div class="child">
            <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="">
<h1>${name}</h1>
<p>
    ${weather[0].main}<br>${main.temp}°C
<h2>
Bugungi ${name}da havo harorati ${main.temp_min}°C dan ${main.temp_max}°C gacha bo'ladi
</h2>
</div>
`});
  } else {
    form.input_city.classList.add("bg-danger");
  }
  if (!spinner_border.classList.contains("d-none")) {
    document.querySelector(".container").classList.add("opacity-25");
  }
});
