import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import SearchContainer from './search/search_container'
import GreetingContainer from './greeting/greeting_container';


const MainPage = () => (
  <div class="mian_page">
    <header className="mainHeader">
      <SearchContainer />
      <GreetingContainer />
    </header>
    <div id="main_content" >
    </div>
  </div>
)

export default MainPage;
