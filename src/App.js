// -----------------------------------
// -----------------------------------
// ------ With Components ------------
// -----------------------------------
// -----------------------------------
import React from 'react';

import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

import './App.css';


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class App extends React.Component {
    
    state = {
        city:     undefined,
        temp:     undefined,
        humidity: undefined,
        sky:      undefined,
        saveCity: false
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if ( city ) {
            const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await API_URL.json();
            this.setState({
                city:     data.name,
                temp:     data.main.temp,
                humidity: data.main.humidity,
                sky:      data.weather[0].description
            });
        } 
    } 

    render() {
        return(
            <div>
                <Info />
                <Form weatheMethod={this.getWeather} />
                <Weather 
                    city={this.state.city}
                    temp={this.state.temp}
                    humidity={this.state.humidity}
                    sky={this.state.sky}
                />
                
            </div>
        );
    }
    
}
export default App;

// import React from 'react';

// import './App.css';


// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// class App extends React.Component {
    
//     state = {
//         city:      undefined,
//         temp:      undefined,
//         humidity:  undefined,
//         sky:       undefined,
//         saveCity:  false,
//         celsius:   ''
        
//     }

//     getWeather = async (e) => {
//         e.preventDefault();
//         const city = e.target.city.value;

        


//         if ( city ) {
//             const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//             const data = await API_URL.json();
//             this.setState({
//                 city:     'City: ' + data.name,
//                 temp:     'Temperature: ' + data.main.temp,
//                 humidity: 'Humidity: ' + data.main.humidity,
//                 sky:      data.weather[0].description,
//                 celsius:  ' C'
//             });
//         } 
//     } 

   

//     render() {
//         return(
            
//             <div>
//                 <div><h1>Weather App</h1></div>

//                 <form onSubmit={this.getWeather}>
//                     <label>
//                     <input type="text" value={this.props.city} onChange={this.handleChange} placeholder="City" name="city"/>
//                     </label>
                    
//                     <button type="submit">Get Weather</button>
//                 </form>

//                 <div>
//                         <p>{this.state.city}</p>
//                         <p>{this.state.temp}{this.state.celsius}</p>
//                         <p>{this.state.humidity}</p>
//                         <p>{this.state.sky}</p>
//                 </div>
//             </div>
//         );
//     }
    
// }
// export default App;
