import { createStore, combineReducers } from 'redux';

const a = [
  {
    a: 1
  }, 
  {
    a: 2
  }
]

const test1Reducer = (state: any = [], action: any) => {
  return state
}

const test2Reducer = (state: any = a, action: any) => {
  switch(action.type) {
    case 'ADD':
      state.push({a: action.payload.a})
      return state;
    default:
      return state;
  }
}

const allReducers = {
  test1: test1Reducer,
  test2: test2Reducer
}

const rootReduces = combineReducers(allReducers);


const store = createStore(rootReduces);

export default store;