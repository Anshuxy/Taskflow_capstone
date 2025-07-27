import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Mail,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const Blog = () => {
  const [currentPost, setCurrentPost] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "10 Time Management Techniques That Actually Work",
      excerpt: "Discover proven strategies to maximize your productivity and take control of your schedule. From the Pomodoro Technique to time blocking, learn what works best for different work styles.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      author: "Sarah Johnson",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Time Management",
      tags: ["Productivity", "Time Management", "Work-Life Balance"]
    },
    {
      id: 2,
      title: "The Psychology of Productivity: Why We Procrastinate",
      excerpt: "Understanding the mental barriers that prevent us from being productive. Explore the science behind procrastination and learn practical techniques to overcome it for good.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      author: "Dr. Michael Chen",
      authorImage: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "March 12, 2025",
      readTime: "12 min read",
      category: "Psychology",
      tags: ["Psychology", "Procrastination", "Motivation"]
    },
    {
      id: 3,
      title: "Digital Minimalism: Declutter Your Digital Life",
      excerpt: "Learn how to streamline your digital tools and workflows for maximum efficiency. Discover which apps and systems actually help versus those that create more distraction.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      author: "Emily Rodriguez",
      authorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Digital Wellness",
      tags: ["Digital Minimalism", "Focus", "Productivity Tools"]
    },
    {
      id: 4,
      title: "Building Sustainable Work Habits for Long-term Success",
      excerpt: "Small changes that lead to big results. Discover how to build productivity habits that stick, backed by behavioral science and real-world examples from successful professionals.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      author: "James Wilson",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "March 8, 2025",
      readTime: "10 min read",
      category: "Habit Building",
      tags: ["Habits", "Success", "Personal Development"]
    },
    {
      id: 5,
      title: "The Remote Worker's Guide to Staying Productive",
      excerpt: "Essential strategies for maintaining focus and productivity while working from home. From setting up the perfect workspace to managing distractions and communication.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      author: "Lisa Park",
      authorImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "March 5, 2025",
      readTime: "9 min read",
      category: "Remote Work",
      tags: ["Remote Work", "Home Office", "Focus"]
    },
    {
      id: 6,
      title: "Goal Setting That Actually Works: A Scientific Approach",
      excerpt: "Move beyond generic goal-setting advice. Learn evidence-based techniques for setting and achieving meaningful goals that align with your values and drive real progress.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      author: "Dr. Alex Thompson",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "March 3, 2025",
      readTime: "11 min read",
      category: "Goal Setting",
      tags: ["Goals", "Achievement", "Planning"]
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, icon: BookOpen },
    { name: "Time Management", count: 2, icon: Clock },
    { name: "Psychology", count: 1, icon: Lightbulb },
    { name: "Digital Wellness", count: 1, icon: Zap },
    { name: "Habit Building", count: 1, icon: Target },
    { name: "Remote Work", count: 1, icon: TrendingUp }
  ];

  const nextPost = () => {
    setCurrentPost((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setCurrentPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Productivity Insights &{' '}
              <span className="text-purple-300">Expert Tips</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover proven strategies, expert insights, and practical tips to boost your 
              productivity and achieve your goals. Join thousands of readers getting smarter about work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Latest Articles</span>
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked articles to help you master productivity and achieve more
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPost * 100}%)` }}
              >
                {blogPosts.map((post, index) => (
                  <div key={post.id} className="w-full flex-shrink-0 px-4">
                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-medium text-gray-900 text-sm">
                                {post.author}
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Calendar className="h-3 w-3" />
                                <span>{post.date}</span>
                                <span>•</span>
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                          <span>Read Full Article</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPost}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextPost}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPost(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentPost ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our complete library of productivity insights and expert advice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {post.author}
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2">
                    <span>Read Article</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Mail className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get weekly productivity tips, exclusive content, and early access to new features. 
              Join 10,000+ professionals who trust our insights.
            </p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Subscribe</span>
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-green-300 mb-4">
                <CheckCircle className="h-6 w-6" />
                <span className="font-semibold">Successfully subscribed!</span>
              </div>
              <p className="text-blue-100">
                Welcome to our community! Check your inbox for a confirmation email.
              </p>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Weekly</div>
              <div className="text-blue-200">New Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">0</div>
              <div className="text-blue-200">Spam Ever</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;