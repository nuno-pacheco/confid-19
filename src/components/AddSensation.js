import React, { Component } from 'react';
import axios from 'axios';
 
class AddSensation extends Component {
  state = { title: "", description: "", isShowing: false } 
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const feelingID = this.props.theProject._id; 

    axios.post("http://localhost:5000/api/sensations", { title, description, feelingID })
    .then( () => {
        this.props.getTheFeeling();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }
 
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }
 
  toggleForm = () => {
      if(!this.state.isShowing){
          this.setState({isShowing: true});
      } else {
        this.setState({isShowing: false});
      }
  }
 
  showAddSensationForm = () => {
    if(this.state.isShowing){
        return(
            <div>
                  <h3>Add Sensation</h3>
                  <form onSubmit={this.handleFormSubmit}>
                  <label>Title:</label>
                  <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
                  <label>Description:</label>
                  <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
                  
                  <input type="submit" value="Submit" />
                  </form>
            </div>
          )
    }
  }
 
  render(){
    return(
      <div>
            <hr />
            <button onClick={() => this.toggleForm()}> Add sensations </button>
            { this.showAddSensationForm() }
      </div>
    )
  }
}
 
export default AddSensation;