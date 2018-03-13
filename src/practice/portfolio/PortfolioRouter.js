// IMPORTS
// - libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// - components
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioHome from './components/PortfolioHome';
import PortfolioWork from './components/PortfolioWork';
import PortfolioProject from './components/PortfolioProject';
import PortfolioContact from './components/PortfolioContact';
import PortfolioNotFound from './components/PortfolioNotFound';

const PortfolioRouter = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={PortfolioHeader} />
      <Switch>
        <Route exact path="/" component={PortfolioHome} />
        <Route exact path="/portfolio" component={PortfolioWork} />
        <Route path="/projects/:project" component={PortfolioProject} />
        <Route path="/contact" component={PortfolioContact} />
        <Route path="/" component={PortfolioNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default PortfolioRouter;
