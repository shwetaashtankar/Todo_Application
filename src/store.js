// src/store.js
import { createStore } from 'redux';
import taskReducer from './reducer';

const store = createStore(taskReducer);

// हर बार state change होने पर localStorage को update करें
store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState()));
});

export default store;
