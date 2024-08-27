import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
