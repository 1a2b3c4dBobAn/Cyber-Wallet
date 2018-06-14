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
import StockShowContainer from './stock/stock_show_container'
import DashBoardContainer from './dashboard/dashboard_container'
// <ProtectedRoute path="/" component={ DashBoardContainer }/>

const MainPage = () => (
  <div className="mian_page">
    <header className="mainHeader">
      <SearchContainer />
      <GreetingContainer />
    </header>
    <div id="main_content" >
      <Switch>
      <ProtectedRoute path="/stocks/:symbol" component={ StockShowContainer }/>
      <ProtectedRoute exact path="/" component={ DashBoardContainer }/>
      </Switch>
    </div>
  </div>
)

export default MainPage;
