/**
 * 容器
 */

import * as React from 'react';
import { connect } from 'react-redux';
import ReactReduxComponent from '../components/ReactReduxPageComponent';
import { Dispatch } from 'redux';

import { IAddA } from '../../../interfaces/storeInterfaces';

class ReactReduxPageContainer extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        this is ReactReduxPage
      </div>
    )
  }
}

const mapStateProps = (state: IAddA) => {
  console.log('react-redex-state', state);
  return {
    num: state
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  console.log(dispatch)
  return {
    add: () => dispatch({type: 'ADD'}),
    delete: () => dispatch({type: 'DELETE'})
  }
}


export default connect (mapStateProps, mapDispatchToProps)(ReactReduxComponent)
