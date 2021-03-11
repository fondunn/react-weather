import React from 'react';

class Weather extends React.Component {
    
    render() {
        return (
            <div>
                { this.props.city &&
                    <div>
                    <form name='info'>
                        <h2>{this.props.city}</h2>
                        <p>Temp: {this.props.temp} °С</p>
                        <p>Humidity: {this.props.humidity}</p>
                        <p>{this.props.sky}</p>
                        

                        {/* <button type='submit'>add to localstorage</button> */}
                    </form>
                        
                       
                    </div>
                }
            </div>
        )
    }
  }

// const Weather = (props) => {
//     return (
//         <div>
//         { props.city && 
//             <div>
//             <h2>{props.city}</h2>
//             <p>Temp: {props.temp}</p>
//             <p>Humidity: {props.humidity}</p>
//             <p>{props.sky}</p>
            
//             <button >Add {props.city} to Favorite</button>
//             </div>

//         }
        
//         </div>
//     )
// }

export default Weather;
