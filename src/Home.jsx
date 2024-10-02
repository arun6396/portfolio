import React, { useEffect, useState } from "react";
import { Navbar, Nav, Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";
import profileimg from "../src/a.png";
import proimage from "../src/components/img/image.jpg";
import proimage2 from "../src/components/img/proimg2.jpg";
import proimage3 from "../src/components/img/proimg3.webp";
import proimage4 from "../src/components/img/proimg4.jpg";
import "./Home.css";
import ContactForm from "./components/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FunFacts from "./FunFacts";

const TEXTS = ["Web Designer", "Front End Developer", "Back End Developer"];


function getProgressColor(value) {
  if (value >= 100) return "#008000"; 
  if (value >= 75) return "#008000"; 
  if (value >= 50) return "#FF0000"; 
  if (value >= 25) return "#FF0000"; 
  return "#0f4d0f"; 
}

const Texts = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % TEXTS.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.wobbly}>
      {TEXTS[index]}
    </TextTransition>
  );
};

// Project data
const projects = [
  { image: proimage, title: "QR Food Restaurant", description: "https://arun6396.github.io/qrfood-cart/" },
  { image: proimage2, title: "Book Store", description: "https://arun6396.github.io/bookstore/" },
  { image: proimage3, title: "Student Management System", description: "https://github.com/arun6396/studentinfo" },
  { image: proimage4, title: "Online Products", description: "https://github.com/arun6396/productservice" },
];

const skills = [
  { name: "Java", value: 80 },
  { name: "J2EE", value: 70 },
  { name: "Spring Boot", value: 75 },
  { name: "Hibernate", value: 70 },
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "Bootstrap", value: 80 },
  { name: "JavaScript", value: 75 },
  { name: "React.js", value: 80 },
  { name: "MySQL", value: 75 },
];

function Home() {
  const [progressValues, setProgressValues] = useState(Array(skills.length).fill(0));

  useEffect(() => {
    const animateProgress = () => {
      setProgressValues(skills.map((skill) => skill.value));
    };
    animateProgress();
  }, []);

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (index) => ({
      width: `${progressValues[index]}%`,
      transition: { duration: 1 },
    }),
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <motion.nav initial="hidden" animate="visible" variants={navbarVariants} transition={{ duration: 0.5 }}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="navbrand" href="#home" style={{ color: 'black' }}>
            <b >SOFTWARE</b> <span style={{ color: 'green' }}><b>ENGINEER</b></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={{ color: 'red' }} className="alink" href="#home"><b>Home</b></Nav.Link>
              <Nav.Link style={{ color: 'red' }} className="alink" href="#Skill"><b>Skill</b></Nav.Link>
              <Nav.Link style={{ color: 'red' }} className="alink" href="#projects"><b>Projects</b></Nav.Link>
              <b><a href="#" className="resume" download={"ARUNKUMAR V - SE.pdf"} > Resume</a></b>
              <Nav.Link style={{ color: 'red' }} className="alink" href="#contact"><b>Contact</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </motion.nav>

      <motion.section id="home" initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5 }}>
        <section id="home" className="gray_bg">
          <div id="particles-js"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="banner_content">
                  <h3 className="clip2" style={{ color: 'green' }}>Hi There,</h3>
                  <h1 className="cd-headline clip">
                    <span className="fw_600">I Am <span  style={{ color: '#00BFFF' }}>ARUNKUMAR V</span></span>
                    <span className="cd-words-wrapper">
                      <b className="fw_600"><Texts /></b>
                    </span>
                  </h1>
                  <p>
                    I am a budding Java full stack developer with skills in
                    React.js, Spring Boot, MySQL, and Hibernate. I have a
                    passion for web development and design, and I'm eager to
                    learn and contribute to innovative projects.
                  </p>
                  <a href="#" className="btn btn-secondary btn-success banner_btn hire" download={"ARUNKUMAR V - SE.pdf"} >Hire Me</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="banner-images">
                  <img src={profileimg} alt="Arun" className="circular-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.section>

      <motion.section id="Skill" initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.2 }}>
        <h2 style={{ color: 'black' }}>My <span style={{ color: 'green' }}>Skills</span></h2>
        <div className="prgsbar">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-label">{skill.name}</div>
              <motion.div
                variants={progressBarVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="prg"
                style={{ width: "100%", height: "20px", backgroundColor: "#e0e0e0", borderRadius: "5px", overflow: "hidden", marginBottom: "10px" }}
              >
                <motion.div
                  style={{ height: "100%", backgroundColor: getProgressColor(progressValues[index]) }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressValues[index]}%` }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.4 }}>
        <h2 style={{ color: 'black' }}>My <span style={{ color: 'green' }}>Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              
              <p><a  className="btn btn-success" href={project.description}>GO TO</a></p>
              
            </motion.div>
          ))}
        </div>
      </motion.section>

      <FunFacts />

      <motion.section id="contact" initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5 }}>
        <h2 style={{ color: 'black' }}>Contact <span style={{ color: 'green'  }}>Us</span></h2>
        <Container>
          <Row>
            <Col>
              <ContactForm />
            </Col>
            <Col>
              <div className="col-md-6 col-lg-6 col-sm-12 contactadd">
                <div className="footer-right-area wow fadeInRight">
                  <h4>Contact Address</h4>
                  <div className="footer-right-contact">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <p>Chennai, Tamil Nadu</p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <p><a className="alink2" href="mailto:arunsiva160@gmail.com">arunsiva160@gmail.com</a></p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <p><a className="alink2" href="tel:+916374625277">(+91) 63746 25277</a></p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <FontAwesomeIcon icon={faGithub} />
                      </div>
                      <p>
                        <a className="alink2" href="https://github.com/arun6396" target="_blank" rel="noopener noreferrer">
                          GitHub Profile
                        </a>
                      </p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                      <p>
                        <a className="alink2" href="https://www.linkedin.com/in/arunkumar-v-339b42141" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-text text-center wow " data-wow-delay="0.3s">
                <p className="footcon"><span style={{ color: 'black' }}>Copyright © 2024</span> Java Fullstack</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
