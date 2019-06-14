import React, {Component} from 'react'
import {withStyles, Card, CardContent, Typography, Tabs, Tab} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import History from '../../../history';

class Login extends Component {

    GoToDashboard =()=>{
        History.push("/apps/dashboards/analytics");
    }
    

    render()
    {
        return (
            <div className="login mt-40">
                             <input type="text" placeholder="username" className="block p-12 w-full border border-grey rounded"/><br />
                             <input type="password" placeholder="password" className="block p-12 w-full border border-grey rounded"/><br />
                             <button className="bg-blue text-white rounded p-6 w-full" onClick={this.GoToDashboard}>LOG IN</button>
            </div>
        )
    }
}

export default (withRouter(Login));
