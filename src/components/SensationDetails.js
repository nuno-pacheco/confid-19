import React, { Component } from 'react';
import axios from 'axios';
 
 
class SensationDetails extends Component {
  state = {}
 
  componentDidMount(){
    this.getTheSensation();
  }
 
  getTheSensation = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/all_feelings/${params.id}/sensations/${params.sensationId}`)
    .then( responseFromApi =>{
      const theSensation = responseFromApi.data;
      this.setState(theSensation);
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    )
  }
}
 
export default SensationDetails;