
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
import localStorage from 'local-storage';


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class App extends React.Component {

    state = {
        city:     undefined,
        temp:     undefined,
        humidity: undefined,
        sky:      undefined,
        cod:      undefined
    }
    
    
    
    // getLocalData = async (e) => {
    //     e.preventDefault()

    //     const storaged_city = localStorage.getItem('city')
        
    //     console.log(storaged_city)
    //     const loc_url = localStorage.getItem('local_url')
    //     console.log(loc_url)
    //     if ( loc_url !== undefined ) {
    //         const API_URL = await fetch(loc_url);
    //         const data = await API_URL.json();

    //         this.setState({
    //             cod:      data.cod
    //     });

    //     if (this.state.cod === 200) {
    //         this.setState({
    //             city:     data.name,
    //             temp:     Math.round( data.main.temp ),
    //             humidity: data.main.humidity,
    //             sky:      data.weather[0].description
    //         })
    //     } 
    //     }
    // }
    
    localCity = async (e) => {
        e.preventDefault();
        const local_city = localStorage.getItem('city');

        console.log(local_city)
    }

    // fetchWeather = async (e) => {
    //     const city = localStorage.getItem('city');

    //     const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    //     if ( city ) {
    //         const API_URL = await fetch(link);
    //         const localData = await API_URL.json();
            
    //             this.setState({
    //                     cod:      localData.cod
    //             });

    //             if (this.state.cod === 200) {
    //                 this.setState({
    //                     city:     localData.name,
    //                     temp:     Math.round( localData.main.temp ),
    //                     humidity: localData.main.humidity,
    //                     sky:      localData.weather[0].description
    //                 })
    //             } 
    //     } 

    // }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        
        
         if ( city ) {
            const API_URL = await fetch(api_url);
            const data = await API_URL.json();
            
                this.setState({
                        cod:      data.cod
                });

                if (this.state.cod === 200) {
                    this.setState({
                        city:     data.name,
                        temp:     Math.round( data.main.temp ),
                        humidity: data.main.humidity,
                        sky:      data.weather[0].description
                    })
                } 
        } 
    } 
    componentDidMount() {
        // const get_local_city = localStorage.getItem('city')
        // if (get_local_city !== null) {
        //     this.setState({
        //         city: this.local_city
                
        //     })
        // }
    }

    componentDidUpdate() {
        // const local_city = localStorage.setItem('city', this.state.city)
       
        
    }

    render() {
        return(
            <div>
                <Info />
                <Form weatherMethod={this.getWeather} />
                <Weather 
                    localCitySend={this.localCity}
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
