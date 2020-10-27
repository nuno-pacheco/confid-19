import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateFeelingsList from "../../components/CreateFeelingsList";
import FeelingsList from "../../components/FeelingsList";
import EditFeelingsList from "../../components/EditFeelingsList";
import DeleteFeeling from "../../components/DeleteFeeling";
import FeelingDetail from "../../components/FeelingDetails";
import SensationDetails from "../../components/SensationDetails";

class PersonalArea extends Component {
    render () {
        return (
            <Router>
                <div className="container">

                    <nav>
                        <Link to="/feelings"> FeelingsList </Link>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/all_feelings">Feelings</Link>
                                </li>
                                <li>
                                    <Link to="/create">Create New</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                
                <Switch>
                <Route exact path="/all_feelings" component={FeelingsList}/>
                <Route exact path="/all_feelings/:id" component={FeelingDetail}/>
                <Route path="/create" component={CreateFeelingsList}/>
                <Route exact path="/edit/:id" component={EditFeelingsList}/>
                <Route path="/all_feelings/:id/sensations/:sensationId" component={SensationDetails}/>
                </Switch>
                </div>
        
            </Router>
        )
    }
}

export default PersonalArea