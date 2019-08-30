import React from 'react';
import axios from 'axios';
var querystring = require( 'querystring' );

export default class PersonInput extends React.Component {
    state = {
        name: '',
        email: '',
        mobile: ''
      }
       

       
      handleChange = (event) => {
         const value = event.target.value;
          this.setState({
              [event.target.name]: value
            });
      };

        handleSubmit = (event) => {
            
            event.preventDefault();

            var data = {
                'name': this.state.name,
                'email': this.state.email,
                'mobile': this.state.mobile
            };
            
            axios({
                method: 'POST',
                url: 'http://localhost/ajaxphp/insert.php',
                data: querystring.stringify(data),
                 
                headers: {'Content-Type': 'application/x-www-form-urlencoded' },
                dataType: 'json'
            })

            .then(function (response) {
                //handle success
                console.log(response)

    
            })

            .catch(function (response) {
                //handle error
                console.log(response)
            });
        };

       

      render() {
          return (
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" name="name"  value={this.state.name} onChange={this.handleChange}></input>

            </label>
            <label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
            </label>
            <label>
                <input type="number" name="mobile" value={this.state.number} onChange={this.handleChange}></input>
            </label>
            <button type="submit">add</button>
            </form>
          )
      }

}
 
 