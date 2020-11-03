import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditFeelingsList from './EditFeelingsList';

 
class FeelingDetails extends Component {
  state = {}

    componentDidMount(){
        this.getSingleFeeling();
    }

    getSingleFeeling = () => {
        const { params } = this.props.match;
        axios.get(`https://confid-19-server.herokuapp.com/all_feelings/${params.id}`)
        .then( responseFromApi =>{
            const theFeeling = responseFromApi.data;
            this.setState(theFeeling);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    renderEditForm = () => {
        if(!this.state.title){
            this.getSingleFeeling();
        } else {
        return <EditFeelingsList theFeeling={this.state} getTheFeeling={this.getSingleFeeling} {...this.props} />
        }
    }

  //Delete Feeling:
  deleteFeeling = () =>{
      const { params } = this.props.match;
      axios.delete(`https://confid-19-server.herokuapp.com/all_feelings/${params.id}`)
      .then( () => {
          this.props.history.push('/all_feelings');
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
        <div>{this.renderEditForm()}</div>
        <button onClick={() => this.deleteFeeling()}>Delete feeling</button>
        <br/>
        <Link to={'/all_feelings'}>Back to all Feelings</Link>
    </div>

    )}
}


 
export default FeelingDetails;