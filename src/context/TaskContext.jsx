import React, { createContext, useContext, useReducer, useEffect } from 'react';

const TaskContext = createContext();

const initialState = {
  tasks: [],
  categories: ['Work', 'Personal', 'Study', 'Health', 'Shopping'],
  filter: 'all',
  searchTerm: '',
  selectedCategory: 'all',
  selectedPriority: 'all'
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_SELECTED_PRIORITY':
      return { ...state, selectedPriority: action.payload };
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, action.payload] };
    default:
      return state;
  }
};

export function TaskProvider ({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    const savedTasks = localStorage.getItem('productivity-tasks');
    if (savedTasks) {
      dispatch({ type: 'SET_TASKS', payload: JSON.parse(savedTasks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('productivity-tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      completed: false
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  const updateTask = (task) => dispatch({ type: 'UPDATE_TASK', payload: task });
  const deleteTask = (taskId) => dispatch({ type: 'DELETE_TASK', payload: taskId });
  const toggleTask = (taskId) => dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  const setFilter = (filter) => dispatch({ type: 'SET_FILTER', payload: filter });
  const setSearchTerm = (term) => dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  const setSelectedCategory = (category) => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
  const setSelectedPriority = (priority) => dispatch({ type: 'SET_SELECTED_PRIORITY', payload: priority });
  const addCategory = (category) => dispatch({ type: 'ADD_CATEGORY', payload: category });

  const getFilteredTasks = () => {
    let filtered = state.tasks;

    if (state.filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (state.filter === 'pending') {
      filtered = filtered.filter(task => !task.completed);
    }

    if (state.selectedCategory !== 'all') {
      filtered = filtered.filter(task => task.category === state.selectedCategory);
    }

    if (state.selectedPriority !== 'all') {
      filtered = filtered.filter(task => task.priority === state.selectedPriority);
    }

    if (state.searchTerm) {
      const searchLower = state.searchTerm.toLowerCase();
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchLower) ||
        (task.description && task.description.toLowerCase().includes(searchLower)) ||
        task.category.toLowerCase().includes(searchLower) ||
        task.priority.toLowerCase().includes(searchLower)
      );
    }

    return filtered.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  };

  return (
    <TaskContext.Provider value={{
      ...state,
      addTask,
      updateTask,
      deleteTask,
      toggleTask,
      setFilter,
      setSearchTerm,
      setSelectedCategory,
      setSelectedPriority,
      addCategory,
      getFilteredTasks
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};
