import React, { Component } from 'react';
import axios from 'axios';
import Translate from 'react-translate-component';
import './CreateFeelingsList.css';


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
      <div className="mainCreateFeeling">
      <h1 className="createTitle"><Translate content="span7"/> {this.props.user.username} ?</h1>
        <div className='col-12' style={{ maxHeight: '55vh', width: '90vw', overflow: 'scroll' }}>
          <form onSubmit={this.handleFormSubmit}>
          <div className="createFeeling">
            <div className="form-group titleCreate">
            <Translate content="label1" component="label"/>
            <input
              name="title"
              value={this.state.title}
              onChange={e => this.handleChange(e)}                     
              type="text" 
            />
            </div>
            <div className="form-group descrCreate">
            <Translate content="label2" component="label"/>
            <input
              name="description"
              value={this.state.description}
              onChange={e => this.handleChange(e)}                     
              type="text" 
              />
            </div>
          </div>
          <button type="submit" value="Submit" className="btn btn-primary"><Translate content="span14" component="span"/></button>
          </form>
        </div>
      </div>
    )
  }
}
 
export default CreateFeelingsList;