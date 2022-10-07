const api_key = `9b9d3f016917ca672d185e193fcd6719`;
const searchWeather = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempurature(data))
}
const displayTempurature = (temp) => {
    setInnerText('city', temp.name);
    setInnerText('temparature', temp.main.temp);
    console.log(temp.weather[0].icon);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const image = document.getElementById('weather-icon');
    image.setAttribute('src', url);

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}