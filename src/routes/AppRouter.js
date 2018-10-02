import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Components/Header';
import Dashboard from '../Components/Dashboard';
import AddExpense from '../Components/AddExpense';
import EditExpense from '../Components/EditExpense';
import HelpPage from '../Components/Help';
import NotFoundPage from '../Components/404';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={ true } component={ Dashboard }/>
        <Route path="/create" exact={ true } component={ AddExpense }/>
        <Route path="/edit/:id" exact={ true } component={ EditExpense }/>
        <Route path="/help" exact={ true } component={ HelpPage }/>
        <Route component={ NotFoundPage }/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;