import { createStore, combineReducers } from 'redux';

// ------------------------------------------------ userReducer.js
const userReducer = (state = {}, action) => {
  if (action.type == 'changeUser') {
    // state.name = action.payload;
    state = { ...state, name: action.payload };
  }
  
  if (action.type == 'changeAge') {
    // state.age = action.payload;
    state = { ...state, age: action.payload };
  }
  return state;
};

// ------------------------------------------------ twittReducer.js
const twittReducer = (state = [], action) => {
  if (action.type == 'postTweet') {
    state = { ...state, twitt: action.payload };
  }
  return state;
};

// ------------------------------------------------ store.js
const reducers = combineReducers({
  user: userReducer,
  twitt: twittReducer,
});

export const store = createStore(reducers);
// ------------------------------------------------ store.js

store.subscribe(() => {
  console.log('Store changed', store.getState());
});

store.dispatch({ type: 'changeUser', payload: 'Mohan' });
store.dispatch({ type: 'changeAge', payload: 30 });
