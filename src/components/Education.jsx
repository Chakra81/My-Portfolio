import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { EDUCATION } from '../utils/constants';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle={true} />

        <div className="relative border-l-2 border-secondary/30 ml-3 md:ml-6 mt-12">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 pl-8 md:pl-12 relative"
            >
              <div className="absolute w-10 h-10 bg-background border-4 border-secondary rounded-full -left-[21px] flex items-center justify-center">
                <GraduationCap size={16} className="text-secondary" />
              </div>

              <div className="glass p-6 md:p-8 rounded-2xl hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold font-poppins text-white">
                    {edu.degree}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-sm font-medium rounded-full text-secondary w-fit">
                    {edu.year}
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <h4 className="text-lg text-gray-400 font-medium">
                    {edu.institution}
                  </h4>
                  <span className="text-accent font-semibold bg-accent/10 px-3 py-1 rounded-md w-fit">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
