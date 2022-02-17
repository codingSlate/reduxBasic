import { createStore, combineReducers } from 'redux';

const reducer = function (state, action) {
  if (action.type == 'inc') {
    return state + action.payload;
  }
  if (action.type == 'dec') {
    return state - action.payload;
  }
  return state;
};

export const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('Store changed', store.getState());
});

store.dispatch({ type: 'inc', payload: 1 });
// store.dispatch({ type: 'inc', payload: 1 });
