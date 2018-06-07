import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import MainPage from './main'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { LineChart, Line,  XAxis, YAxis } from 'recharts';



export const App = () => (
  <div className="logPage">
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/" component={ MainPage }/>
    </Switch>
  </div>
);
