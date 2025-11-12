import React, { useState, useEffect } from 'react';
import { motion, } from 'framer-motion';
import {
  Mail, Github, Linkedin, Code,
  Smartphone, Palette,
  ChevronDown, ExternalLink,
  Download,
  FacebookIcon,
  Instagram
} from 'lucide-react';
import RiveAnimation from './components/RiveAnimation'
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const floatAnimation = {
  animate: {
    y: [-10, 10],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
      ease: "easeInOut"
    }
  }
};

// Handle resume download
  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Laith_Mohammed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
const App = () => {
  const [activeSection, setActiveSection] = useState('home');


  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern shopping experience with real-time inventory management",
      image: "https://placehold.co/600x400/4b6cb7/ffffff?text=E-Commerce+Platform",
      tech: ["Flutter", "FastAPI", "MYsql"],
      link: "#"
    },
    {
      id: 2,
      title: "Health Tracker App",
      description: "Personal wellness dashboard with data visualization",
      image: "https://placehold.co/600x400/18a999/ffffff?text=Health+Tracker",
      tech: ["Flutter", "Firebase", ],
      link: "#"
    },
    {
      id: 3,
      title: "Design System",
      description: "Comprehensive UI kit with documentation and examples",
      image: "https://placehold.co/600x400/d3b3b8/ffffff?text=Design+System",
      tech: ["Figma", "Storybook", "TypeScript"],
      link: "#"
    }
  ];

  // Skills data
  const skills = [
    { name: "flutter", icon: <Code size={24} /> },
    { name: "React", icon: <Code size={24} /> },
    { name: "UI/UX Design", icon: <Palette size={24} /> },
    { name: "Mobile Dev", icon: <Smartphone size={24} /> },
    { name: "dart", icon: <Code size={24} /> },
    { name: "TypeScript", icon: <Code size={24} /> },
    { name: "FastAPI", icon: <Code size={24} /> },
    { name: "Supabase", icon: <Code size={24} /> },
    { name: "Firebase", icon: <Code size={24} /> },
    { name: "Responsive Design", icon: <Smartphone size={24} /> }
  ];

const socialLinks = [
    { 
      icon: <Github size={28} />, 
      label: "GitHub", 
      url: "https://github.com/laithmh" // UPDATE THIS
    },
    { 
      icon: <FacebookIcon size={28} />, 
      label: "Facebook", 
      url: "https://www.facebook.com/laithmh.54" // UPDATE THIS
    },
     { 
      icon: <Instagram size={28} />, 
      label: "instagram", 
      url: "https://www.instagram.com/laithmohammad30?utm_source=qr&igsh=cmltajg2enFxZjE2" // UPDATE THIS
    },
   
  ];
  // Handle scroll events for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth'
      });

    }
  };

  return (
    <div className="min-h-screen bg-[#e0e5ec] font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
          >

          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize font-medium relative py-2 transition-all ${activeSection === section
                    ? 'text-[#1a3a5f]'
                    : 'text-[#5d7d9e] hover:text-[#1a3a5f]'
                  }`}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a3a5f]"
                    initial={false}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="bg-[#e0e5ec] px-4 py-2 rounded-xl shadow-[3px_3px_8px_#a3b1c6,-3px_-3px_8px_#ffffff] hover:shadow-[inset_3px_3px_8px_#a3b1c6,inset_-3px_-3px_8px_#ffffff] transition-all"
          >
         
              
            Resume
          </motion.button>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Rive Logo */}
            <div className="relative mb-12 mt-6 flex justify-center p-4"> {/* <--- padding & margins added */}
              <div className="bg-[#e0e5ec] w-35 h-35 md:w-50 md:h-50 rounded-full shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] overflow-hidden flex items-center justify-center">
                <RiveAnimation />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#1a3a5f] to-[#5d7d9e] bg-clip-text text-transparent">
              LAITH MOHAMMED
            </h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-[#5d7d9e] mb-10"
            >
              App Developer • UI/UX Designer • Graphic & Video Creator
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center space-x-4 mt-6"
            >
              {['Projects', 'Skills', 'Contact'].map((text, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(text.toLowerCase())}
                  className="bg-[#e0e5ec] px-6 py-3 rounded-xl shadow-[3px_3px_8px_#a3b1c6,-3px_-3px_8px_#ffffff] hover:shadow-[inset_3px_3px_8px_#a3b1c6,inset_-3px_-3px_8px_#ffffff] transition-all font-medium text-[#1a3a5f]"
                >
                  {text}
                </motion.button>
              ))}
            </motion.div>

            {/* Down Arrow */}
            <motion.div
              {...floatAnimation}
              className="mt-20 animate-bounce cursor-pointer text-[#5d7d9e]"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#1a3a5f]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#e0e5ec] rounded-2xl shadow-[7px_7px_15px_#a3b1c6,-7px_-7px_15px_#ffffff] p-8"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6 shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
                <img
                  src="https://placehold.co/600x400/4b6cb7/ffffff?text=About+Me"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#1a3a5f]">My Journey</h3>
              <p className="text-[#5d7d9e] leading-relaxed">4 years experienced App Developer, Graphic Designer, and UI/UX Creator.
                I specialize in building beautiful and functional digital experiences that merge design and technology.
                I develop cross-platform mobile apps using Flutter, following structured patterns like GetX and Bloc, and integrate powerful backends such as Supabase, Firebase, and FastAPI.
                I also have experience in web development using React, and a strong background in graphic design and video editing, which helps me bring a creative edge to every project I work on.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#e0e5ec] rounded-2xl shadow-[7px_7px_15px_#a3b1c6,-7px_-7px_15px_#ffffff] p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#1a3a5f]">Philosophy</h3>
                <p className="text-[#5d7d9e] leading-relaxed mb-4">
                  I believe technology should serve people, not the other way around. Every pixel and line of code should have a purpose - to create seamless, accessible, and delightful experiences.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['User-Centered', 'Pixel Perfect', 'Performance First', 'Accessible'].map((value) => (
                    <span key={value} className="bg-white px-3 py-1 rounded-full text-sm text-[#1a3a5f] shadow-[2px_2px_5px_#a3b1c6,-2px_-2px_5px_#ffffff]">
                      {value}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#e0e5ec] rounded-2xl shadow-[7px_7px_15px_#a3b1c6,-7px_-7px_15px_#ffffff] p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#1a3a5f]">Let's Connect</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center text-[#5d7d9e] hover:text-[#1a3a5f] transition-colors"
                    >
                      {social.icon}
                      <span className="text-sm mt-1">{social.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

     <section id="skills" className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6"
>
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-[#e0e5ec] rounded-xl shadow-[5px_5px_12px_#a3b1c6,-5px_-5px_12px_#ffffff] p-6 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-[inset_5px_5px_12px_#a3b1c6,inset_-5px_-5px_12px_#ffffff]"
    >
      <div className="text-[#1a3a5f] mb-3">{skill.icon}</div>
      <span className="font-medium text-center text-[#1a3a5f]">{skill.name}</span>
    </motion.div>
  ))}
</motion.div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#1a3a5f]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_20px_#a3b1c6,-8px_-8px_20px_#ffffff] overflow-hidden transition-all hover:shadow-[inset_8px_8px_20px_#a3b1c6,inset_-8px_-8px_20px_#ffffff]"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1a3a5f]">{project.title}</h3>
                  <p className="text-[#5d7d9e] mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white px-2 py-1 rounded text-sm text-[#1a3a5f] shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-[#1a3a5f] font-medium"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-full bg-[#e0e5ec] flex items-center justify-center shadow-[2px_2px_5px_#a3b1c6,-2px_-2px_5px_#ffffff] hover:shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff] transition-all"
                    >
                      <Download size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              className="bg-[#e0e5ec] px-8 py-3 rounded-full shadow-[5px_5px_15px_#a3b1c6,-5px_-5px_15px_#ffffff] hover:shadow-[inset_5px_5px_15px_#a3b1c6,inset_-5px_-5px_15px_#ffffff] font-medium text-lg text-[#1a3a5f] transition-all"
            >
              View All Projects
            </button>
          </motion.div>
        </div>
      </section>
{/* Contact Section */}
<section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#d1d8e0] to-[#e0e5ec]">
  <div className="max-w-4xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-6 text-[#1a3a5f]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Let's Create Together
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-xl text-[#5d7d9e] mb-12 max-w-2xl mx-auto"
    >
      Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
    </motion.p>

    {/* Email Link Section */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="bg-[#e0e5ec] rounded-2xl shadow-[10px_10px_30px_#a3b1c6,-10px_-10px_30px_#ffffff] p-8 max-w-lg mx-auto"
    >
      <div className="mb-8">
        <p className="text-lg text-[#5d7d9e] mb-2">Feel free to reach out directly:</p>
        <motion.a
          
          // whileHover={{ scale: 1.05, y: -3 }}
          // whileTap={{ scale: 0.95 }}
          className="inline-block text-2xl font-bold text-[#1a3a5f] hover:text-[#1a3a5f]/80 transition-colors"
        >
          laithmhwork@gmail.com 
        </motion.a>
      </div>
      
      
     
    </motion.div>
  </div>
</section>
      {/* Footer */}
      <footer className="py-12 px-4 text-center text-[#5d7d9e]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4"
          >
           
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="p-3 rounded-xl bg-[#e0e5ec] text-[#1a3a5f] hover:text-[#1a3a5f]/80 shadow-[3px_3px_8px_#a3b1c6,-3px_-3px_8px_#ffffff] hover:shadow-[inset_3px_3px_8px_#a3b1c6,inset_-3px_-3px_8px_#ffffff] transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <p>© {new Date().getFullYear()} Laith Mohammed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
