import React from 'react';
import './block.css'
const WeatherInfo = props => (
    <div>
    { props.city &&
        <div className="block-info">
            <form onSubmit={props.saveMethod}>
            <p>City: {props.city} </p>
            <p>Temp: {props.temp} °С</p>
            <p>Humidity: {props.humi}%</p>
            <p>Weather: {props.weather}</p>
            <button className="btn-add">save</button>
            </form>
        </div>
        }
        { props.error &&
            <div className="error">
                <p>{props.error}</p>
            </div>
        }
    </div>
);

export default WeatherInfo;