import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';

const AddTask: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText(''); // Limpiar el campo de entrada después de agregar la tarea
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center mb-4">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
        className="border border-gray-300 p-2 rounded-lg mb-2 sm:mb-0 sm:mr-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
