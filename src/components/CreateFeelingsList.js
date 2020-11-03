import React, { Component } from 'react';
import axios from 'axios';
import Header2 from '../components/headers/header2';
 
class CreateFeelingsList extends Component {
  state = { title: "", description: "" }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    axios.post("https://confid-19-server.herokuapp.com/all_feelings", { title, description })
    .then( () => {
        // this.props.getData();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }
 
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }
 
  render(){
    return(
      <div>
      <Header2/>
      <h1>How are you feeling {this.props.user.username} ?</h1>
        <div className='col-12' style={{ maxHeight: '55vh', width: '90vw', overflow: 'scroll' }}>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
 
export default CreateFeelingsList;