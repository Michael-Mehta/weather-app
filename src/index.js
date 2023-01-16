import _ from 'lodash';
import './style.css';
import getWeather from './location';
function component() {
    const element = document.createElement('div');

    const message = document.createElement('div');

    const results = document.getElementById("content");

 

 
    const getCity = document.getElementById("cityInput");

    


    
    element.appendChild(message);

    element.appendChild(results);
  

    
    // Lodash, now imported by this script

    const submit = document.getElementById("submit");


    
    submit.addEventListener('click', button => {

        const city = getCity.value;


    message.textContent = "The temperature in " + city + " is";
    
    getWeather(city);

    });
    return element;
  }
  
  document.body.appendChild(component());