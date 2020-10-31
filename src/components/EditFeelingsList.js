import React, { Component } from 'react';
import axios from 'axios';
import Header2 from '../components/headers/header2';

class EditFeelingsList extends Component {
    state = {
        title: this.props.theFeeling.title, 
        description: this.props.theFeeling.description
      }
      
      handleFormSubmit = (event) => {
        const title = this.state.title;
        const description = this.state.description;
     
        event.preventDefault();
     
        axios.put(`http://localhost:5000/all_feelings/${this.props.theFeeling._id}`, { title, description })
        .then( () => {
            this.props.getTheFeeling();
            // after submitting the form, redirect to '/all_feelings'
            this.props.history.push('/all_feelings');    
        })
        .catch( error => console.log(error) )
      }
     
      handleChangeTitle = (event) => {  
        this.setState({
          title:event.target.value
        })
      }
     
      handleChangeDesc = (event) => {  
        this.setState({
          description:event.target.value
        })
      }
     
      render(){
        return (
          <div>
            <div>
              <hr />
              <h3>Edit form</h3>
              <form onSubmit={this.handleFormSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
                <label>Description:</label>
                <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
                
                <input type="submit" value="Submit" />
              </form>
            </div>
            </div>
        )
      }
    }
export default EditFeelingsList