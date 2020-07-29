import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddVideo from './Pages/Add/Video';
import AddCategory from './Pages/Add/Category';

const Page404 = () => (<div>Page 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Add/Video" component={AddVideo} />
      <Route path="/Add/Category" component={AddCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);