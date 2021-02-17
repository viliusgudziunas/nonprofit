import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { appRoutes } from './router';

export const App: React.FC = () => {
  return (
    <Router>
      <Container className='app'>
        <Header tabs={appRoutes} />

        <Switch>
          {appRoutes.map((route) => (
            <Route exact path={route.path} key={route.name}>
              {route.page}
            </Route>
          ))}
        </Switch>
      </Container>
    </Router>
  );
};
