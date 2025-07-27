import React, { useState } from 'react';
import { Clock, Edit, Trash2, CheckSquare, Square, Calendar, AlertCircle } from 'lucide-react';

const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200 shadow-sm';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-200 shadow-sm';
      case 'low':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 shadow-sm';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Work: 'bg-blue-50 text-blue-700 shadow-sm',
      Personal: 'bg-purple-50 text-purple-700 shadow-sm',
      Study: 'bg-indigo-50 text-indigo-700 shadow-sm',
      Health: 'bg-emerald-50 text-emerald-700 shadow-sm',
      Shopping: 'bg-pink-50 text-pink-700 shadow-sm'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 shadow-sm';
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date() && !task.completed;
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md ${
        task.completed ? 'opacity-75' : ''
      } ${isOverdue(task.dueDate) ? 'border-l-4 border-l-red-400' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onToggle(task.id)}
            className={`transition-all duration-200 hover:scale-110 ${
              task.completed ? 'text-green-600' : 'text-gray-400 hover:text-green-600'
            }`}
          >
            {task.completed ? (
              <CheckSquare className="h-6 w-6" />
            ) : (
              <Square className="h-6 w-6" />
            )}
          </button>
          <h3
            className={`font-semibold text-lg ${
              task.completed
                ? 'text-gray-500 line-through'
                : 'text-gray-900'
            }`}
          >
            {task.title}
          </h3>
        </div>

        {/* Actions */}
        <div className={`flex items-center space-x-2 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className={`text-sm mb-4 leading-relaxed ${
          task.completed ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {task.description}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(task.category)}`}>
          {task.category}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
          {task.priority} priority
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        {/* Due Date */}
        {task.dueDate && (
          <div className={`flex items-center space-x-2 text-sm ${
            isOverdue(task.dueDate)
              ? 'text-red-600'
              : task.completed
              ? 'text-gray-400'
              : 'text-gray-500'
          }`}>
            {isOverdue(task.dueDate) ? (
              <AlertCircle className="h-4 w-4" />
            ) : (
              <Calendar className="h-4 w-4" />
            )}
            <span>
              {isOverdue(task.dueDate) ? 'Overdue: ' : 'Due: '}
              {formatDate(task.dueDate)}
            </span>
          </div>
        )}

        {/* Reminder */}
        {task.reminder && (
          <div className={`flex items-center space-x-2 text-sm ${
            task.completed ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Clock className="h-4 w-4" />
            <span>Reminder set</span>
          </div>
        )}

        {/* Created Date */}
        {!task.dueDate && !task.reminder && (
          <div className="text-xs text-gray-400">
            Created {formatDate(task.createdAt)}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;