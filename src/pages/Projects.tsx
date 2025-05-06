import React, { useState } from 'react';
import { Droplet, BookOpen, Heart, Globe, Users, TreePine, ArrowRight, Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    category: "Water",
    location: "Rural Maharashtra, India",
    impact: "10,000+ people",
    progress: 75,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Providing clean drinking water access to rural communities through well construction and water purification systems.",
    icon: <Droplet className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Education for All",
    category: "Education",
    location: "Urban Delhi, India",
    impact: "5,000+ students",
    progress: 60,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Providing quality education and learning resources to underprivileged children in urban areas.",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Healthcare Access",
    category: "Healthcare",
    location: "West Bengal, India",
    impact: "15,000+ patients",
    progress: 85,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Mobile medical clinics bringing healthcare services to remote villages and underserved communities.",
    icon: <Heart className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Sustainable Agriculture",
    category: "Environment",
    location: "Punjab, India",
    impact: "2,000+ farmers",
    progress: 40,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Training farmers in sustainable agricultural practices and providing access to modern farming techniques.",
    icon: <TreePine className="h-6 w-6" />
  },
  {
    id: 5,
    title: "Women Empowerment",
    category: "Social",
    location: "Rajasthan, India",
    impact: "3,000+ women",
    progress: 65,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Skill development and entrepreneurship programs for women in rural communities.",
    icon: <Users className="h-6 w-6" />
  },
  {
    id: 6,
    title: "Global Outreach",
    category: "International",
    location: "Multiple Countries",
    impact: "25,000+ lives",
    progress: 90,
    image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "International collaboration projects focusing on sustainable development goals.",
    icon: <Globe className="h-6 w-6" />
  }
];

const categories = ["All", "Water", "Education", "Healthcare", "Environment", "Social", "International"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-yellow-400 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
            <p className="text-xl opacity-90 animate-fade-in-delay">
              Discover how we're making a difference in communities across India and beyond through our various initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Progress</span>
                      <span className="text-blue-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Impact: {project.impact}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Support Our Projects?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your contribution can help us expand our reach and create an even bigger impact in communities that need it most.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Make a Donation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;