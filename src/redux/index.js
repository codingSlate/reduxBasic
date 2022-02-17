import { applyMiddleware, createStore, Middleware } from 'redux';
// middleware for async task
// ------------------------------------------------ userReducer.js
// const userReducer = (state = {}, action) => {
//   if (action.type == 'changeUser') {
//     // state.name = action.payload;
//     state = { ...state, name: action.payload };
//   }

//   if (action.type == 'changeAge') {
//     // state.age = action.payload;
//     state = { ...state, age: action.payload };
//   }
//   return state;
// };

// ------------------------------------------------ twittReducer.js
// const twittReducer = (state = [], action) => {
//   return state;
// };

// ------------------------------------------------ store.js
const reducer = (state = 0, action) => {
  if (action.type == 'inc') {
    return (state = state + 1);
  } else if (action.type == 'dec') {
    return (state = state - 1);
  }
  return state;
};

const logger = (store) => (next) => (action) => {
  console.log('action fired', action);
  action.type = 'dec';
  next(action);
};

const middleware = applyMiddleware();

export const store = createStore(reducer, 1, middleware);
// ------------------------------------------------ store.js

store.subscribe(() => {
  console.log('Store changed', store.getState());
});

store.dispatch({ type: 'inc' });
