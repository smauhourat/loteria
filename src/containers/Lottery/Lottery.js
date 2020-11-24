import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom';
import Results from './Results/Results';

import './Lottery.css';


export default class Lottery extends Component {
    render() {
        return (
            <div className="Lottery">
                <header>
                    <nav>
                        <ul>
                        <li><NavLink to="/results/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }} >Home</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/results" component={Results} />
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>                
            </div>
        )
    }
}
