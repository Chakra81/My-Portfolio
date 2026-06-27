import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Code } from 'lucide-react';
import { TYPING_TEXT } from '../utils/constants';
import { Link } from 'react-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % TYPING_TEXT.length;
      const fullText = TYPING_TEXT[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (isDeleting) {
        setTypingSpeed(prev => prev / 2);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(150);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-secondary rounded-full mix-blend-screen filter blur-[128px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 flex justify-center lg:justify-start relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-primary via-accent to-secondary animate-pulse-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background relative">
              {/* Profile Image Placeholder. In a real scenario, this would be an actual image */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                alt="Katari Chakraveni" 
                className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-accent font-medium mb-2"
          >
            Hi, I'm
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4"
          >
            Katari <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Chakraveni</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-8 md:h-10 mb-6"
          >
            <span className="text-xl md:text-3xl font-semibold text-gray-300">
              {text}
              <span className="animate-blink border-r-2 border-accent ml-1"></span>
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            "I build modern, scalable and user-friendly web applications using Python, Django, React.js and Artificial Intelligence technologies."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <a href="/resume.pdf" download="My_Resume.pdf" className="glass hover:bg-primary/20 hover:border-primary transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-2 font-medium">
              <Download size={18} /> Download Resume
            </a>
            <Link to="projects" smooth={true} duration={500} className="bg-primary hover:bg-blue-700 text-white transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-2 font-medium shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer">
              View Projects <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            <a href="https://www.linkedin.com/in/chakraveni-katari-244484364" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Chakra81" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
              <Github size={24} />
            </a>
            <a href="mailto:gsna42474@gmail.com" className="text-gray-400 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300">
              <Mail size={24} />
            </a>
            <a href="https://app.vectorshift.ai/chatbots/embedded/684ea2a466d4e37c5d450084" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors hover:-translate-y-1 transform duration-300" title="AI Portfolio">
              <Code size={24} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
