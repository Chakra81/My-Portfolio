import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../utils/constants';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const FeaturedProjects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto">
        <SectionHeading title="Featured Projects" subtitle={true} />

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden flex flex-col lg:flex-row group"
            >
              {/* Project Image */}
              <div className="lg:w-2/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-accent text-sm font-medium mb-1">{project.subtitle}</h4>
                    <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-gray-300 hover:text-white transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-gray-300 hover:text-white transition-all">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-base mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features Toggle */}
                {project.features && project.features.length > 0 && (
                  <div className="mt-auto">
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      {expandedId === index ? 'Hide Features' : 'View Features'}
                      {expandedId === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    <AnimatePresence>
                      {expandedId === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.features.map((feature, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
