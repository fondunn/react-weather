import React from 'react';

class Form extends React.Component {

      render() {
        return (
          <form onSubmit={this.props.weatheMethod}>
            <label>
              <input type="text" value={this.props.city} onChange={this.handleChange} placeholder="City" name="city"/>
            </label>
            
            <button type="submit">Get Weather</button>
          </form>


        );
      }
  }

export default Form;