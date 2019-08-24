function getWeather(){
    const cityName = document.querySelector("input").value;
     
axios.get(`http://api.openweathermap.org/data/2.5/weather?q= ${cityName}&appid=c08043e00e2fd16a898067490ce47a16`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
}
