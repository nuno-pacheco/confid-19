import React, { Component } from 'react';
import axios from 'axios';
import Translate from 'react-translate-component';
import './EditFeelingsList.css'


class EditFeelingsList extends Component {
    state = {
        title: this.props.theFeeling.title, 
        description: this.props.theFeeling.description
      }
      
      handleFormSubmit = (event) => {
        const title = this.state.title;
        const description = this.state.description;
     
        event.preventDefault();
     
        axios.put(`https://confid-19-server.herokuapp.com/all_feelings/${this.props.theFeeling._id}`, { title, description })
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
          <div className="editForm">
            <hr/>
              <Translate content="h3" component="h3"/>
                <form onSubmit={this.handleFormSubmit}>
                <div className="editFeeling">
                  <div className="form-group titleEdit">
                  <Translate content="label1" component="label"/>
                  <input
                    name="title"
                    value={this.state.title}
                    onChange={e => this.handleChangeTitle(e)}                     
                    type="text" 
                  />
                  </div>
                  <div className="form-group descrEdit">
                  <Translate content="label2" component="label"/>
                  <input
                    name="description"
                    value={this.state.description}
                    onChange={e => this.handleChangeDesc(e)}                     
                    type="text" 
                  />
                  </div>
                </div>
                  <button type="submit" value="Submit" className="btn btn-primary"><Translate content="span11" component="span"/></button>
                </form>
            </div>
        )
      }
    }
export default EditFeelingsList