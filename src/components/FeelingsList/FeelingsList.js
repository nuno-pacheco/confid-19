import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';
import './FeelingsList.css';




 
class FeelingsList extends Component {
  state = { 
    listOfFeelings: [] 
  }

  
  getAllFeelings= () =>{
    axios.get(`https://confid-19-server.herokuapp.com/all_feelings`)
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
      <div className="container1">
        <h1><Translate content="span7"/> {this.props.user.username} ?</h1>
        <div className ="row">
          <div className='col-12' style={{ maxHeight: '67vh', width: '98vw', overflow: 'scroll' }}>  
            <ul>
              { this.state.listOfFeelings.map( feeling => {
                return (
                  <li className="card m-3 d-flex" style={{maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} key={feeling._id}>
                    <div className="list-group">
                        <div className="card-body">  
                          <Link to={`/all_feelings/${feeling._id}`}>
                            <h3>{feeling.title}</h3>
                          </Link>
                          <p style={{maxWidth: '400px'}} >{feeling.description} </p>
                          <sub>Updated at: {feeling.update_at}</sub>
                        </div>  
                      </div>
                  </li>
                
                )})
              }
            </ul>
          </div> 
        </div>
      </div>
    )
  }
}
 
export default FeelingsList;



