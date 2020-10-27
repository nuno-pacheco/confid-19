import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditFeelingsList from './EditFeelingsList';
import AddSensation from './AddSensation';
 
class FeelingDetails extends Component {
  state = {}

    componentDidMount(){
        this.getSingleFeeling();
    }

    getSingleFeeling = () => {
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/all_feelings/${params.id}`)
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
      const { params } = this.props.matc;
      axios.delete(`http://localhost:5000/api/all_feelings/${params.id}`)
      .then( () => {
          this.props.history.push('/all_feelings');
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  
  renderAddSensationForm = () => {
      if(!this.state.title){
          this.getSingleFeeling();
      } else {
          return <AddSensation theFeeling={this.state} getTheFeeling={this.getSingleFeeling} />
      }
  }




  render(){
    return( 

    <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div>
            { this.state.sensations && this.state.sensations.length > 0 && <h3>Sensations </h3> }
            { this.state.sensations && this.state.sensation.map((sensation, index) => {
                return(
                    <>
                        <div key={index}>
                            <Link to={`/all_feelings/${this.state._id}/sensations/${sensation._id}`}>
                                { sensation.title }
                            </Link>
                        </div>
                            <div>{this.renderEditForm()}</div>
                        <button onClick={() => this.deleteFeeling()}>Delete feeling</button>
                        <br/>
                        <div>{this.renderAddSensationForm()}</div>
                        <br/>
                        <Link to={'/all_feelings'}>Back to all Feelings</Link>
                    </>
        
            )}
            )}
        </div>
    </div>
    )}
}


 
export default FeelingDetails;