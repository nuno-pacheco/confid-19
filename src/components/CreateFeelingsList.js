import React, { Component } from 'react';
import axios from 'axios';
import Header2 from '../components/headers/header2';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../components/translations/en';
import pt from '../components/translations/pt';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pt', pt);
counterpart.setLocale('en');



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
      <h1><Translate content="span7"/> {this.props.user.username} ?</h1>
        <div className='col-12' style={{ maxHeight: '55vh', width: '90vw', overflow: 'scroll' }}>
          <form onSubmit={this.handleFormSubmit}>
            <Translate content="label1" component="label"/>
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
            <Translate content="label2" component="label"/>
            <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
 
export default CreateFeelingsList;