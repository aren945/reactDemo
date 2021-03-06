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
import LoginFormPageComponent from './pages/form/LoginPageComponent';
import RegisterPageComponent from './pages/form/RegisterPageComponent';
import TableBasePageComponent from './pages/table/BaseTablePage';


import TestComponent from './testComponents/testComponent';
import PropsComponent from './testComponents/PropsComponent/PropComponent';
import HocComponent from './testComponents/HOCTest/DemoComponent';
import Hooks1Component from './testComponents/HOOKS/Hooks1Component';
import ReduxTestComponent from './testComponents/ReduxShopping/ReduxTestComponent';
import ReactReduxPageContainer from './testComponents/ReactReduxTest/containers/ReactReduxPageComtainer';

import { Provider, ProviderProps } from 'react-redux';
import ErrorBoundariesPageComponent from './testComponents/ErrorBoundaries/ErrorBoundariesComponent';
import CityPageComponent from './pages/city/CityPage';
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
          <Route path="/test/errot-boundaries" component= { ErrorBoundariesPageComponent } />
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

          <Route path="/admin/form/login" component={ LoginFormPageComponent } />
          <Route path="/admin/form/reg" component={ RegisterPageComponent } />

          <Route path="/admin/table/basic" component= { TableBasePageComponent } />

          <Route path="/admin/city" component={ CityPageComponent } />

          <Route exact={true} path="/admin" component={HomePageComponent} />
          <Route component={NotFoundPageComponent} />
        </Switch>
      </AdminComponent>
    )
  }
}

export default MainComponent