import { useState } from 'react';
import { useTask } from '../context/TaskContext.jsx';
import TaskList from '../components/TaskList.jsx';
import TaskFilters from '../components/TaskFilters.jsx';
import TaskModal from '../components/TaskModal';
import { CheckSquare, Target, Clock, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const { getFilteredTasks, toggleTask, deleteTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const filteredTasks = getFilteredTasks();

  const handleEdit = (task) => {
    setEditTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditTask(null);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "TaskFlow transformed how I manage my daily tasks. The intuitive interface and smart categorization save me hours each week."
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The priority system and reminders keep me focused on what matters most. It's like having a personal productivity assistant."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "I love how I can organize tasks by category and track my progress. TaskFlow made me 50% more productive!"
    }
  ];

  const templates = [
    {
      title: "Daily Routine",
      description: "Start your day with a structured routine template",
      tasks: 8,
      category: "Personal",
      image: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      title: "Exam Prep",
      description: "Organize your study schedule and materials",
      tasks: 12,
      category: "Study",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      title: "Project Launch",
      description: "Complete checklist for launching new projects",
      tasks: 15,
      category: "Work",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTemplate = () => {
    setCurrentTemplate((prev) => (prev + 1) % templates.length);
  };

  const prevTemplate = () => {
    setCurrentTemplate((prev) => (prev - 1 + templates.length) % templates.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Plan Your Day.{' '}
              <span className="text-purple-300">Boost Productivity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Transform your chaos into clarity with intelligent task management. 
              Organize, prioritize, and achieve your goals like never before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <CheckSquare className="h-5 w-5" />
                <span>Create Your First Task</span>
              </button>
              <button 
                onClick={() => {
                  // Demo functionality - scroll to task section and highlight features
                  const taskSection = document.querySelector('[data-section="task-management"]');
                  if (taskSection) {
                    taskSection.scrollIntoView({ behavior: 'smooth' });
                    // Add a temporary highlight effect
                    taskSection.classList.add('ring-4', 'ring-purple-300', 'ring-opacity-50');
                    setTimeout(() => {
                      taskSection.classList.remove('ring-4', 'ring-purple-300', 'ring-opacity-50');
                    }, 3000);
                  }
                  // Show demo alert
                  setTimeout(() => {
                    alert('🎯 Demo Mode: Try creating a task, setting priorities, and using filters! This is a fully functional task management system.');
                  }, 1000);
                }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 transform hover:scale-105"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Task Management Section */}
      <section className="py-16" data-section="task-management">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Tasks, Organized
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take control of your productivity with our intelligent task management system
            </p>
          </div>

          <TaskFilters onOpenModal={() => setIsModalOpen(true)} />
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onEdit={handleEdit}
            onDelete={deleteTask}
          />
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Organize Like a Pro
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Smart categorization, priority management, and intuitive filters help you 
                stay focused on what matters most. Transform overwhelming task lists into 
                manageable, actionable plans.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700">Smart priority system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckSquare className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700">Category-based organization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700">Due date tracking</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Organized workspace"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-medium">12 tasks completed today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Time management"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-blue-600 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-white" />
                  <span className="text-sm font-medium text-white">Next reminder in 15min</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Timely Reminders
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Never miss a deadline again. Our intelligent reminder system keeps you 
                on track with customizable notifications and smart scheduling suggestions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <span className="text-gray-300">Smart reminder scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-emerald-400" />
                  <span className="text-gray-300">Deadline tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckSquare className="h-6 w-6 text-amber-400" />
                  <span className="text-gray-300">Progress monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Task Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started quickly with our pre-built templates for common workflows
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTemplate * 100}%)` }}
              >
                {templates.map((template, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
                      <img
                        src={template.image}
                        alt={template.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                            {template.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {template.tasks} tasks
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {template.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {template.description}
                        </p>
                        <button 
                          onClick={() => {
                            // Template functionality
                            alert(`🚀 Loading "${template.title}" template with ${template.tasks} pre-configured tasks! This would integrate with your task creation system.`);
                          }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        >
                          <span>Use Template</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTemplate}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTemplate}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {templates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTemplate(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 shadow-sm ${
                    index === currentTemplate ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of productive professionals who trust TaskFlow
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 shadow-sm ${
                    index === currentTestimonial ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Have questions or feedback? We'd love to hear from you.
            </p>

            <form className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none shadow-sm"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  alert('📧 Thank you for your message! We\'ll get back to you soon. (This would integrate with your contact form API)');
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        editTask={editTask}
      />
    </div>
  );
};

export default Home;