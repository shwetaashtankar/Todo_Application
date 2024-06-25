// src/reducer.js
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';

// Initial state localStorage से load करें, अगर data available हो
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]; // New task add करें
    case EDIT_TASK:
      return state.map(task => task.id === action.payload.id ? action.payload : task); // Task को edit करें
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload); // Task delete करें
    default:
      return state; // Default state return करें
  }
};

export default taskReducer;
