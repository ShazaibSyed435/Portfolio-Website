import React from "react";
import "./App.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">🎀  𝓢𝓱𝓪𝔃𝓪𝓲𝓫 𝓢𝔂𝓮𝓭 🎀 </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>     
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hello-badge">Hello There!</div>
          <h1>
            I'm <span className="highlight">Shazaib Syed</span>,
          </h1>
          <h2>Frontend Developer</h2>
          <h3>Based in Pakistan.</h3>
          <p>
            I'm an experienced website Developer with 7 months in the field,
            collaborating with various companies and startups.
          </p>
          <div className="cta-buttons">
            <button className="btn primary">View My Portfolio</button>
            <button className="btn secondary">Hire Me</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <img
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
              // src="/image.png"
              alt="Developer"
            />
          </div>
        </div>
      </section>

      <div className="services-strip">
        <div className="service-item">APP DESIGN</div>
        <div className="service-item">WEBSITE DESIGN</div>
        <div className="service-item">DASHBOARD</div>
        <div className="service-item">WIREFRAME</div>
        <div className="service-item">MOBILE APP</div>
      </div>

      <section id="education" className="education-section">
        <h2>
          My <span className="highlight">Academic and Professional</span>{" "}
          Journey
        </h2>
        <div className="timeline-container">
          <div className="education-timeline">
            <h3>Education</h3>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <span className="year">2022-2024</span>
              <h4>The T.I.P Academy Model College, Paniola</h4>
              <p>Intermediate in Computer Science</p>
              <ul className="timeline-details">
                <li>First Division with distinction</li>
                <li>Active member of Computer Society</li>
                <li>Grade A</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <span className="year">2020-2022</span>
              <h4>The T.I.P Academy Model College, Paniola</h4>
              <p>ICS: Computer Science</p>
              <ul className="timeline-details">
                <li>First Division with distinction</li>
                <li>Active member of Computer Society</li>
                   <li>Grade A+</li>
              </ul>
            </div>
          </div>
          <div className="work-timeline">
            <h3>Work Experience</h3>

               <div className="timeline-item">
              <div className="timeline-marker"></div>
              <span className="year">2024-Present</span>
              <h4>Web Development Intern</h4>
              <p>Morosoft Labs</p>
              <ul className="timeline-details">
                <li>Researching and Learning New Technologies</li>
                <li>Collaborating with Team Members</li>
                <li>Design and UI/UX Implementation Support</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <span className="year">2024-2025</span>
              <h4>Customer Service Representative</h4>
              <p>Self-Employed</p>
              <ul className="timeline-details">
                <li>Handle Customer Inquiries</li>
                <li>Provide Product/Service Information</li>
                <li>Resolve Complaints...</li>
              </ul>
            </div>
         
          </div>
        </div>
      </section>

      <section id="about" className="about-section">


        <div className="hero-image">
          <div className="profile-circle">
            <img
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
              alt="Developer"
            />
          </div>
        </div>
        <div>
          <h2>
            Who is <span className="highlight">Shazaib Syed</span>?
          </h2>
          <p>
            I'm an experienced website developer with 1 year in the field,
            collaborating with various companies and startups. I bring passion and
            precision to every project I work on.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Industries Served</p>
            </div>
            <div className="stat-item">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
          </div>
          <a
            href="/"
          
            className="download-cv"
          >
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="download-icon"
            >
              <path d="M12 16l-4-4h8l-4 4zm0 2l-4-4h8l-4 4z" />
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
          </a>
        </div>
      </section>

      <section id="tech-stack" className="tech-stack-section">
        <h2>
          My <span className="highlight">Tech Stack</span>
        </h2>
        <h3>Technologies I Work With</h3>
        <div className="tech-grid">
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
            />
            <h4>HTML5</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "98%" }}></div>
            </div>
            <span>98%</span>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
            />
            <h4>CSS3</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "96%" }}></div>
            </div>
            <span>96%</span>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <h4>JavaScript</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "94%" }}></div>
            </div>
            <span>94%</span>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <h4>React</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
            <span>90%</span>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
              alt="Bootstrap"
            />
            <h4>Bootstrap</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "92%" }}></div>
            </div>
            <span>92%</span>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="animate-fade-in">
          My Latest <span className="highlight">Projects</span>
        </h2>
        <div className="project-grid">
          <div className="project-card animate-slide-up">
            <div className="project-image">
              <img
                src="https://xdfile.com/wp-content/uploads/2020/06/furniture-ecommerce-app-design-freebie-758x569.jpg"
                alt="E-commerce Website"
              />
              <div className="project-overlay">
                <a href="#" className="view-project">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>E-commerce Website</h3>
              <p>
                A full-featured online shopping platform with cart functionality
                and payment integration
              </p>
              <div className="project-tech">
                <span>React js</span>
                <span>Javascript</span>
                <span>Bootstrap 5</span>
              </div>
            </div>
          </div>
  
          <div
            className="project-card animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="project-image">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*BYf_jO4gNnkjM-I-CYsHtg.jpeg"
                alt="Dashboard UI"
              />
              <div className="project-overlay">
                <a href="#" className="view-project">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>Dashboard UI</h3>
              <p>
                Interactive admin dashboard with real-time data visualization
                and analytics
              </p>
              <div className="project-tech">
                 <span>React js</span>
                <span>Javascript</span>
                <span>Bootstrap 5</span>
              </div>
            </div>
          </div>
          <div
            className="project-card animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="project-image">
              <img
                src="https://cdn.dribbble.com/userupload/33908351/file/original-1aa084310348c3c573d029bcaea3ae81.png?format=webp&resize=400x300&vertical=center"
                alt="Social Media App"
              />
              <div className="project-overlay">
                <a href="#" className="view-project">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>Social Media App</h3>
              <p>
                Feature-rich social networking platform with real-time messaging
              </p>
              <div className="project-tech">
                <span>React js</span>
                <span>Javascript</span>
                <span>Bootstrap 5</span>
              </div>
            </div>
          </div>
          <div
            className="project-card animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="project-image">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f98eb6177449205.64d631cc72f17.png"
                alt="Weather App"
              />
              <div className="project-overlay">
                <a href="#" className="view-project">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>Weather App</h3>
              <p>
                Real-time weather forecasting app with location-based services
              </p>
              <div className="project-tech">
                <span>React js</span>
                <span>Javascript</span>
                <span>Bootstrap 5</span>
              </div>
            </div>
          </div>
          <div
            className="project-card animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="project-image">
              <img
                src="https://img.freepik.com/premium-psd/task-manager-app-ui_242034-19.jpg?semt=ais_hybrid&w=740"
                alt="Task Manager"
              />
              <div className="project-overlay">
                <a href="#" className="view-project">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>Task Manager</h3>
              <p>Collaborative task management system with team features</p>
              <div className="project-tech">
                <span>React js</span>
                <span>Javascript</span>
                <span>Bootstrap 5</span>
              
              </div>
            </div>
          </div>
          <div
            className="project-card animate-slide-up"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="project-image">
              <img
                src="https://i.pinimg.com/736x/00/2c/0b/002c0b33f65c540f9799b360c52ab2df.jpg"
                alt="Fitness Tracker"
              />
              <div className="project-overlay">
                <a href="#" className="view-project">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>Fitness Tracker</h3>
              <p>
                Personal fitness tracking application with progress analytics
              </p>
              <div className="project-tech">
                <span>React js</span>
                <span>Javascript</span>
                <span>Bootstrap 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <h2>
          Client <span className="highlight">Testimonials</span>
        </h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/c62f320d-a449-4723-8705-ce38f51049ec/2022-08-10-Trinet-Monticalvo-Caleb-0950.jpg"
              alt="Client 1"
            />
            <div className="testimonial-content">
              <p>
                "Working with Shazaib was amazing! He delivered exactly what we
                needed for our web project."
              </p>
              <h4>Gregory S. Stclair </h4>
              <span>CEO, TechStart</span>
            </div>
          </div>
          <div className="testimonial-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcH-1O1vJrO7JES9PymGvX2EBW942VbepT8u_KIg9_D4zpyRobQ9O-JYvCy5HjBzfz5xQ&usqp=CAU"
              alt="Client 2"
            />
            <div className="testimonial-content">
              <p>
                "Exceptional work on our e-commerce platform. Very professional
                and responsive."
              </p>
              <h4>Emma Brown Davis</h4>
              <span>Product Manager</span>
            </div>
          </div>
          <div className="testimonial-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxC1Vt7j1OblAe_lGmBkqRfY4KwF5H2s-kfg&s"
              alt="Client 3"
            />
            <div className="testimonial-content">
              <p>
                "Great attention to detail and excellent communication
                throughout the project."
              </p>
              <h4>Michael H Thomson</h4>
              <span>Marketing Director</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>
          Let's Discuss <span className="highlight">Your Project</span>
        </h2>
        <p className="contact-subtitle">
          Available for freelance opportunities
        </p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Let's Connect</h3>
              <p>
                Ready to start your next project? I'm here to help turn your
                ideas into reality.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+92 321781405</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>shazaib@example.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>Bahawalpur, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option value="">Select Service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="ui">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea
              placeholder="Tell me about your project..."
              required
              rows="6"
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>© 2024 Shazaib Syed. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
