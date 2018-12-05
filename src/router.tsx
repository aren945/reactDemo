import * as React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import AppComponent from './App';
import AdminComponent from './admin';
import HomePageComponent from './pages/home/HomePage';
import LoginPageComponent from './pages/login/LoginPage';
import NotFoundPageComponent from './pages/404/404Page';

import UiPageComponent from './pages/UI/UiPage';
import ButtonPageComponent from './pages/UI/buttons/ButtonPage';

export default class MainComponent extends React.Component {
  public render(): React.ReactNode {
    return (
      <Router>
        <AppComponent>
          <Switch>
            {/* <Route path="/admin" component={ AdminComponent } /> */}
            <Route path="/admin" render={ this._adminRender } />
            <Route path="/login" component={ LoginPageComponent } />
            <Route component={ NotFoundPageComponent } />
          </Switch>
        </AppComponent>
      </Router>
    )
  }

  private _adminRender(): React.ReactNode {
    return (
      <AdminComponent>
        <Switch>
          <Route exact={true}  path="/admin/ui" component={ UiPageComponent } />
          <Route path="/admin/ui/buttons" component= { ButtonPageComponent } />
          <Route component={HomePageComponent} />
        </Switch>
      </AdminComponent>
    )
  }
}