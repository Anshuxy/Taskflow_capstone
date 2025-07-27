import React, { useState } from 'react';
import { 
  CheckSquare, 
  Calendar, 
  Clock, 
  Tag, 
  Smartphone, 
  Cloud, 
  ChevronDown, 
  ChevronUp,
  Plus,
  Edit,
  Trash2,
  Bell,
  Filter,
  Search,
  Target,
  Users,
  Zap,
  Shield
} from 'lucide-react';

const Features = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const features = [
    {
      icon: CheckSquare,
      title: "Create and Manage Tasks",
      description: "Effortlessly create, edit, and organize your tasks with our intuitive interface. Add detailed descriptions, set categories, and track your progress.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      benefits: ["Quick task creation", "Rich text descriptions", "Easy editing", "Bulk operations"]
    },
    {
      icon: Tag,
      title: "Smart Categorization",
      description: "Organize your tasks by categories like Work, Personal, Study, Health, and more. Create custom categories that fit your lifestyle.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      benefits: ["Custom categories", "Color coding", "Quick filtering", "Visual organization"]
    },
    {
      icon: Target,
      title: "Priority Management",
      description: "Set task priorities (High, Medium, Low) to focus on what matters most. Our smart sorting keeps important tasks at the top.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      benefits: ["Three priority levels", "Automatic sorting", "Visual indicators", "Focus mode"]
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a deadline with our intelligent reminder system. Set custom reminder times and get notified across all your devices.",
      image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      benefits: ["Custom reminder times", "Multiple notifications", "Cross-device sync", "Snooze options"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Support",
      description: "Access your tasks anywhere with our responsive design. Works seamlessly on desktop, tablet, and mobile devices.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      benefits: ["Responsive design", "Mobile optimized", "Offline access", "Sync across devices"]
    },
    {
      icon: Cloud,
      title: "Cloud Synchronization",
      description: "Your tasks are automatically synced to the cloud. Access them from any device and never lose your important information.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      benefits: ["Real-time sync", "Automatic backup", "Multi-device access", "Data security"]
    }
  ];

  const faqs = [
    {
      question: "How do I create my first task?",
      answer: "Click the 'Add Task' button on the home page or use the '+' icon in the navigation. Fill in your task details, set a category and priority, and you're all set!"
    },
    {
      question: "Can I set recurring tasks?",
      answer: "Yes! When creating or editing a task, you can set it to repeat daily, weekly, monthly, or create custom recurring patterns to fit your routine."
    },
    {
      question: "How do reminders work?",
      answer: "Set reminder times when creating tasks. You'll receive notifications via email and in-app alerts. You can customize reminder settings in your profile."
    },
    {
      question: "Can I collaborate with team members?",
      answer: "TaskFlow Pro includes team collaboration features. You can share tasks, assign team members, and track project progress together."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely! We use enterprise-grade encryption to protect your data. All information is stored securely and backed up regularly."
    },
    {
      question: "Can I integrate with other apps?",
      answer: "Yes! TaskFlow integrates with popular apps like Google Calendar, Outlook, Slack, and more. Check our integrations page for the full list."
    },
    {
      question: "Is there a mobile app?",
      answer: "TaskFlow is fully responsive and works great on mobile browsers. Native iOS and Android apps are coming soon!"
    },
    {
      question: "How do I import existing tasks?",
      answer: "Use our import feature to bring tasks from other platforms like Todoist, Trello, or CSV files. Go to Settings > Import to get started."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Powerful Features for{' '}
              <span className="text-green-300">Maximum Productivity</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover all the tools and features designed to help you stay organized, 
              focused, and productive. Everything you need in one beautiful interface.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Try All Features</span>
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Stay Productive
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple task creation to advanced project management, 
              TaskFlow has all the features you need to succeed.
            </p>
          </div>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckSquare className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                    <span>Learn More</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TaskFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technology and user-focused design principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">Optimized performance for instant task management</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm">Your data is encrypted and protected at all times</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Ready</h3>
              <p className="text-gray-600 text-sm">Built for both individual and team productivity</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Smartphone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600 text-sm">Perfect experience on any device, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Demo */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See TaskFlow in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interactive preview of core features and workflows
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Task Management Demo</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Mock Interface */}
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Search tasks...</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Task</span>
                </button>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  All (5)
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  Pending (3)
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  Completed (2)
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckSquare className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Complete project proposal</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">High</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Edit className="h-4 w-4 text-gray-400" />
                    <Trash2 className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckSquare className="h-4 w-4 text-green-600" />
                    <span className="text-sm line-through text-gray-500">Review team feedback</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Medium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Edit className="h-4 w-4 text-gray-400" />
                    <Trash2 className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about TaskFlow features
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover why thousands of professionals choose TaskFlow
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;