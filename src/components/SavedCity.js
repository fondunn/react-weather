import React from 'react';
import './block.css'

const API_KEY = 'e039bcb17d5da41f78ee589c80d8de32'
class SavedCity extends React.Component {

    state = { }
    componentDidMount = async () => {

        let city = this.props.name
        
        const API_URL =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

        const data = await API_URL.json();
        this.setState({
                city:     data.name,
                temp:     Math.round(data.main.temp),
                humidity: data.main.humidity,
                weather:  data.weather[0].description
            });
    }
    removeLocal = (e) => {
        
        const key = this.state.city
        
        localStorage.removeItem(key)
        
        
    }
    render() {
        return(
            <div className="block-info">
                <form onSubmit={this.removeLocal}>
                    <p>City: {this.state.city} </p>
                    <p>Temp: {this.state.temp} </p>
                    <p>Humidity: {this.state.humidity} </p>
                    <p>Weather: {this.state.weather} </p>
                    <button className="btn-remove">Remove</button>
                </form>
                
            </div>
            
        )
    }
}

export default SavedCity;
