import React from 'react';
import ReactDOM from 'react-dom'

class MyComponentClass extends React.Component {
    render()
        {
            return (
               <h1>hello {this.props.name} {this.props.age}</h1> 
            //    <h1>{formatDate(props.date)}</h1>
            );
        }
    
};

export default MyComponentClass
