
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { get } from 'http';
class Table extends React.Component {
  state = { 
    data: []
   }


   componentDidMount() {
     let self = this;
      axios({
        method: 'get',
        url: 'http://localhost/ajaxphp/select.php',
        dataType: 'json',
        crossDomain: true,        
        header: {"Content-Type":"application/json", "Accept":"application/json",'Access-Control-Allow-Origin': 'http://localhost/ajaxphp/'
      }

      })
      .then(function (response) {
        // console.log(response)
        var data = [];
        response.data.map(function(item){
          data.push(item);
        })

        console.log(self);
        self.setState({data});
        


    }) 
    .catch(function (response) {
      //handle error
      console.log(response)
  });

}

  render() { 
    return ( <table className="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {this.state.data.map(data => 
             <tr key={data.name}>
             <td key={data.name}>{data.name}</td>
             <td key={data.email} >{data.email}</td>
             <td key={data.mobile} >{data.mobile}</td>
           </tr>
            )}

    </tbody>
  </table> );
  }
}
 
export default  Table;
