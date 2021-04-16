import React from 'react';

import axios from 'axios';


class componentone extends React.Component {

  state={
    persons:[]


  }


  componentDidMount() {

    const token = '00D2v000001YYJR!ARkAQFmnVo7CbiszFAgl5oGtCA9NNZu6ZaGEYHx7kOIndj.Ru6CcC4Z0.2gFMS_GfxiyvQb5L7XLoJ2baw3THsAn7p_Zcnf2';

    axios.get(`https://crazydev-dev-ed.my.salesforce.com/services/data/v51.0/query/?q=SELECT+Id,LastName,Email,Phone+FROM+Contact+Limit+10`,{headers:{'Authorization': `Bearer ${token}`,'Access-Control-Allow-Origin': '*'},mode:'cors'})
      .then(res => {
        console.log(res);
      
        console.log(res.data.records[0].LastName);

        this.setState({persons:res.data.records})
       
      })
  }


  render() {
    return (

      <div >
      
      { this.state.persons.map(person => <table style={{border: "1px solid black"}}><tr><td width="100">{person.LastName}</td>
      
        <td width="100">{person.FirstName}</td> <td width="100">{person.Phone}</td><td width="300">{person.Email}</td></tr>
      
      </table>)}
    
      </div>
    
    )
  }
}
export default componentone;
