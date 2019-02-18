import * as React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import AppComponent from './App';
import AdminComponent from './admin';
import HomePageComponent from './pages/home/HomePage';
import LoginPageComponent from './pages/login/LoginPage';
import NotFoundPageComponent from './pages/404/404Page';

import UiPageComponent from './pages/UI/UiPage';
import ButtonPageComponent from './pages/UI/buttons/ButtonPage';
import ModalPageComponent from './pages/UI/modals/ModalsPage';
import LoadingsPageComponent from './pages/UI/loadings/LoadingsPage';
import TabsPageComponent from './pages/UI/Tabs/TabsPage';
import MessagePageComponent from './pages/UI/message/MessagePageComponent';

import TestComponent from './testComponents/testComponent';
import PropsComponent from './testComponents/PropsComponent/PropComponent';
import HocComponent from './testComponents/HOCTest/DemoComponent';
import Hooks1Component from './testComponents/HOOKS/Hooks1Component';
import ReduxTestComponent from './testComponents/ReduxShopping/ReduxTestComponent';
import ReactReduxPageContainer from './testComponents/ReactReduxTest/containers/ReactReduxPageComtainer';

import { Provider, ProviderProps } from 'react-redux';
class MainComponent extends React.Component<ProviderProps> {
  public render(): React.ReactNode {
    return (
      <Provider store={this.props.store}>
        <Router>
          <AppComponent>
            <Switch>
              {/* <Route path="/admin" component={ AdminComponent } /> */}
              <Route path="/admin" render={ this._adminRender } />
              <Route path="/login" component={ LoginPageComponent } />
              <Route path="/test" render={ this._testComponentRender } />
              <Route component={ NotFoundPageComponent } />
            </Switch>
          </AppComponent>
        </Router>
      </Provider>
    )
  }

  private _testComponentRender(): React.ReactNode {
    return(
      <TestComponent>
        <Switch>
          <Route path="/test/props" component={PropsComponent} />
          <Route path="/test/hoc" component={HocComponent} />
          <Route path="/test/hooks" component={Hooks1Component} />
          <Route path="/test/rtest" component={ReduxTestComponent} />
          <Route path="/test/react-redux" component={ReactReduxPageContainer} />
          <Route component={ NotFoundPageComponent } />
        </Switch>
      </TestComponent>
    )
  }

  private _adminRender(): React.ReactNode {
    return (
      <AdminComponent>
        <Switch>
          <Route exact={true}  path="/admin/ui" component={ UiPageComponent } />
          <Route path="/admin/ui/buttons" component= { ButtonPageComponent } />
          <Route path="/admin/ui/modals" component= { ModalPageComponent } />
          <Route path="/admin/ui/loadings" component= { LoadingsPageComponent } />
          <Route path="/admin/ui/messages" component= { MessagePageComponent } />
          <Route path="/admin/ui/tabs" component= { TabsPageComponent } />
          
          <Route exact={true} path="/admin" component={HomePageComponent} />
          <Route component={NotFoundPageComponent} />
        </Switch>
      </AdminComponent>
    )
  }
}

export default MainComponent