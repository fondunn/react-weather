import React from 'react';
import './form.css'
const Form = props => (
    <div className="custom-form">
        <form onSubmit={props.weatherMethod}>
            <input type="text" value={props.city} name="city" placeholder="City"/>
            <button>Get Weather</button>
        </form>
    </div>
);
export default Form;
