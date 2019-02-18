import { combineReducers } from 'redux';

let addA = (state: any = 0, action: any): any => {
  switch (action.type) {
    case 'ADD':
      state+=1;
      return state;
    case 'DELETE':
      state-=1;
      return state;
    default:
      return state;
  }
}

export default combineReducers ({
  addA
})