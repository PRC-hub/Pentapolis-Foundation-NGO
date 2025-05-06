import React, { useEffect } from 'react';
import './about.css';

const About = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        '.about-text, .about-image, .mission-text, .mission-image, .stat-item, .team-member'
      );

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
          (element as HTMLElement).style.animationPlayState = 'running';
        }
      });
    };

    // Pause all animations initially
    document.querySelectorAll('[style*="animation"]').forEach((el) => {
      (el as HTMLElement).style.animationPlayState = 'paused';
    });

    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    return () => {
      window.removeEventListener('load', animateOnScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div >
      <div className="about-hero ">
        <div className="container ">
          <div className="header-content">
            <h1 className='text-4xl md:text-5xl font-bold'>About Pentapolis Foundation</h1>
            <p>
            Pentapolis Foundation empowers communities through skill development, education, and employment.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Story</h2>
            <p>From humble beginnings to global impact</p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>Who We Are</h3>
              <p>
              Pentapolis Foundation empowers communities through skill development, education, and employment. Through initiatives like REAP and STEP, we create a job-ready workforce and drive sustainable growth. Partnering with corporates and institutions, we bridge learning and careers with impactful training and staffing solutions.
              </p>
              <p>
                We brings together sectors and social change experts from across India. Some of our team were creators, trainers, and leaders of the society. All of us consult and train and each brings complementary specialties offering a full suite of expertise under one roof. We are passionate about raising up role models from within the community.
              </p>
              <p>
              We empowers communities through education, skill development, and jobs. Through REAP and STEP, we bridge learning and careers, creating a job-ready workforce.
              </p>
            </div>

            <div className="about-image">
              <img
                src="/images/happy_group_pic.png"
                alt="Our team working together"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission & Vision</h2>
            <p>Guiding principles that drive our work</p>
          </div>

          <div className="mission-content">
            <div className="mission-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Our mission in action"
              />
            </div>

            <div className="mission-text">
              <h3>Our Mission</h3>
              <p>
              Our mission is to empower communities through skill development and entrepreneurial insights, guiding them toward a future prosperous with opportunities. Doing so contributes to state and national targets for achieving social justice...
              </p>

              <h3>Our Vision</h3>
              <p>
                We envision a world where cities are engines of opportunity, sustainability,
                and connection...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Impact</h2>
            <p>Numbers that tell our story</p>
          </div>

          <div className="stats-containers">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">45</div>
              <div className="stat-label">Cities Worldwide</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Community Partners</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">10</div>
              <div className="stat-label">Years of Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
