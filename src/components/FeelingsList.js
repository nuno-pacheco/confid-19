import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
import CreateFeelingsList from './CreateFeelingsList';
 
class FeelingsList extends Component {
  state = { listOfFeelings: [] }
 
  getAllFeelings= () =>{
    axios.get(`http://localhost:5000/all_feelings`)
    .then(response=> {
      this.setState({
        listOfFeelings: response.data
      });
    })
    .catch ((err) =>console.log(err));
  };
 
  componentDidMount() {
    this.getAllFeelings();
  }
 
  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfFeelings.map( feeling => {
            return (
              <div key={feeling._id}>
                <Link to={`/all_feelings/${feeling._id}`}>
                  <h3>{feeling.title}</h3>
                </Link>
                <ul>
                  { feeling.sensations.map((sensation, index) => {
                    return <li key={index}>{sensation.title}</li>
                  }) }
                </ul> 
                { <p style={{maxWidth: '400px'}} >{feeling.description} </p>}
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <CreateFeelingsList getData={() => this.getAllFeelings()}/>
        </div>
      </div>
    )
  }
}
 
export default FeelingsList;



