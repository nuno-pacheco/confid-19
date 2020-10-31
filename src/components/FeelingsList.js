import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header2 from '../components/headers/header2';




 
class FeelingsList extends Component {
  state = { 
    listOfFeelings: [] 
  }

  
  getAllFeelings= () =>{
    axios.get(`http://localhost:5000/all_feelings`)
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
      <div>
      <Header2/>
      <h1>How are you feeling {this.props.user.username} ?</h1>
        <div style={{width: '80%', float:"center"}}>
          { this.state.listOfFeelings.map( feeling => {
            return (
              <div className="row">
                <div className="col-md-10 mb-6">
                  <div key={feeling._id} className="card example-1 scrollbar-ripe-malinka">
                    <div className="card-body">  
                      <Link to={`/all_feelings/${feeling._id}`}>
                        <h3>{feeling.title}</h3>
                      </Link>
                      <p style={{maxWidth: '400px'}} >{feeling.description} </p>
                    </div>  
                  </div>
                </div>
              </div>
             
            )})
          }
        </div>
      </div>
    )
  }
}
 
export default FeelingsList;



