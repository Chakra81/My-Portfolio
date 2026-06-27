import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { STATS } from '../utils/constants';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto">
        <SectionHeading title="About Me" subtitle={true} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stats Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            ref={ref}
          >
            {STATS.map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-glass-bg/50 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2 font-poppins">
                  {inView && (
                    <CountUp 
                      end={parseFloat(stat.value.replace(/[^0-9.]/g, ''))} 
                      duration={2.5}
                      decimals={stat.value.includes('.') ? 1 : 0}
                      suffix={stat.value.includes('+') ? '+' : ''}
                    />
                  )}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg"
          >
            <p>
              I am <span className="text-white font-semibold">Katari Chakraveni</span>, a B.Sc. Artificial Intelligence graduate and Python Full Stack Developer passionate about creating scalable web applications and AI-powered solutions.
            </p>
            <p>
              I completed intensive Python Full Stack Development training at Krify Private Solutions where I gained practical experience in React.js, Django, Django REST Framework, REST APIs, SQL, Git, API Integration, and modern software development practices.
            </p>
            <p>
              I also completed an AI Prompt Engineering internship where I worked with cutting-edge tools including ChatGPT, GitHub Copilot, VectorShift, Gamma, n8n, Canva AI, AWS CodeWhisperer, Napkin AI and other emerging technologies.
            </p>
            <p className="border-l-4 border-primary pl-4 italic text-gray-400">
              I continuously learn emerging technologies and enjoy solving real-world business problems through software.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
