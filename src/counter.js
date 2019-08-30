 import React from 'react';
 import ReactDOM from 'react-dom';
 class Counter extends React.Component {
     state = { 
        count: 0

      };

    //   constructor() {
    //       super(); 
    //       this.handleIncrement = this.handleIncrement.bind(this);
    //   }

      handleIncrement = () => {
        //   this.setState({count: this.state.count + 1});
          if(this.state.count >= 10){
            alert('cannot be more than 10');
          }else{
            this.setState({count: this.state.count + 1});
          }
      }

      handleDecrement = () => {
        //   this.setState({count: this.state.count - 1});
          if(this.state.count <= 0){
              alert("value cannot be less than zero");
          }else{
            this.setState({count: this.state.count - 1});
          }
          
      }

     render() { 

        return (
            <div>
            <button onClick={this.handleIncrement} className="btn btn-primary inc_dec_btn">increment</button>
            <span className="m-5 badge badge-success p-3">{this.formatCount()}</span>
            <button onClick={this.handleDecrement} className="btn btn-primary inc_dec_btn">decrement</button>
                {/* {this.renderTags()} */}
            </div>
        );

     }

     formatCount() {
        const {count} = this.state;
      return  count === 0 ? 'zero' : count;
    }

    


 }
  
 export default Counter;