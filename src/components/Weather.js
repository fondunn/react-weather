import React from 'react'
import Form from './Form'
import WeatherInfo from './WeatherInfo'
import SavedCity from './SavedCity'

const API_KEY = 'e039bcb17d5da41f78ee589c80d8de32'

class Weather extends React.Component {

state = {
    cities: {}
}

componentDidMount = async () => {
        
        let favCities = []

        for ( let i = 0; i < localStorage.length; i++ ) {
           
            let city = localStorage.getItem(localStorage.key(i)) 
            favCities.push(city)

            const cities = {...this.state.cities}
            cities[`city${Date.now()}`]=city

            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

            this.setState({
                cities
            })
    }
}

getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.city.value;
    
    if ( city ) {
        const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await API_URL.json();
        if( data.cod === 200 ) {
            this.setState({
                city:     data.name,
                temp:     Math.round(data.main.temp),
                humidity: data.main.humidity,
                weather:  data.weather[0].description,
                error: ""
                });
        }   else if (data.cod !== 200 ) {
            this.setState({
                city:     "",
                temp:     "",
                humidity: "",
                weather:  "",
                error: "Incorrect City"
            })
        }
    } else if (city === ""){
        this.setState({
                city:     "",
                temp:     "",
                humidity: "",
                weather:  "",
                error: "Enter City"
        });
    } 
} 


saveToLocal = (e) => {
    e.preventDefault();
    let cities = {
        city : []
    }
    let city = this.state.city
    let checkCities = localStorage.getItem('cities')

    if (!checkCities) {
        localStorage.setItem(city, this.state.city)
    } else {
        let parsedCities = JSON.parse(checkCities)
        cities.city.push(parsedCities)
        localStorage.setItem(city, cities)
    }
}

render() {
    return(  
        <div>
            <h1>React Weather</h1>
            <Form   
                weatherMethod={this.getWeather}
            />
            <WeatherInfo 
                city={this.state.city}
                temp={this.state.temp}
                humi={this.state.humidity}
                weather={this.state.weather}
                error={this.state.error}
                saveMethod={this.saveToLocal}

            />
            
            {Object.keys(this.state.cities).map(key => {
                return <SavedCity 
                key={key}
                name={this.state.cities[key]}
                />
            })}
        </div>
    );
    }
}
export default Weather;
