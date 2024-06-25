// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <Provider store={store}>
      <div className="min-w-96 min-h-96 mt-10 text-white  p-4 bg-black shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
        <TaskInput taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
        <TaskList setTaskToEdit={setTaskToEdit} />
      </div>
    </Provider>
  );
};

export default App;
