import { ArrowRight } from 'lucide-react';
import DragCards from '../components/DragCards';
import FeaturedProjects from '../components/FeaturedProjects';
import Impact from '../components/impact';
import Loader from '../components/loader';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      <Loader />  
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl lg:text-8xl font-bold mb-6 animate-fade-in">
              Together We Can Make A Difference
            </h1>
            <p className="text-2xl mb-8 animate-fade-in-delay">
              Join us in our mission to create positive change and empower communities through sustainable development and education.
            </p>
            <div className="space-x-4 animate-fade-in-delay-2">
              <Link to ="/donate" className="bg-blue-600 text-white lg:text-2xl px-8 py-3 mb-2 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to ="/projects" className="bg-white text-gray-900 lg:text-2xl px-8 py-3 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors">
                Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Impact />

      <DragCards />

      

      {/* About Section */}
      {/* Impact Section
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">10,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+</h3>
              <p className="text-gray-600">Communities Served</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">20+</h3>
              <p className="text-gray-600">Active Projects</p>
            </div>
          </div>
        </div>
      </section> */}

      <FeaturedProjects/>


      {/* Featured Projects */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Water Initiative",
                image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                description: "Providing clean drinking water to rural communities"
              },
              {
                title: "Education for All",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                description: "Supporting education in underprivileged areas"
              },
              {
                title: "Healthcare Access",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                description: "Bringing healthcare services to remote regions"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="/projects" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;