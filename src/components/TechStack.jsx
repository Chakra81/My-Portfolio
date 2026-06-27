import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../utils/constants';

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-6 md:px-12 relative bg-black/20">
      <div className="container mx-auto">
        <SectionHeading title="Tech Stack" subtitle={true} />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-glass-border pb-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary">
                  <skillGroup.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-poppins">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
