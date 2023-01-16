

export default async function getWeather(location) {
    const key = "&appid=41fe9d6a996d88ddd4a863cbf3e53cf5";
    const query = "q=" + location;
    const units = "&units=imperial"
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    const fullURL = baseUrl + query + units + key;
  
    
    fetch(fullURL, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        const results = document.getElementById("content")

      results.textContent = response.main.temp;
    });
  };