import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DonationPage from './components/DonationPage';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          </ThemeProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;