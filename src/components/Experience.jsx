import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { INTERNSHIPS } from '../utils/constants';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 relative bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Internships" subtitle={true} />

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 mt-12">
          {INTERNSHIPS.map((internship, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 pl-8 md:pl-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-10 h-10 bg-background border-4 border-primary rounded-full -left-[21px] flex items-center justify-center">
                <Briefcase size={16} className="text-primary" />
              </div>

              <div className="glass p-6 md:p-8 rounded-2xl hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] transition-all">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-xs font-medium rounded-full text-accent mb-4">
                  {internship.duration}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-poppins text-white mb-1">
                  {internship.role}
                </h3>
                <h4 className="text-lg text-gray-400 font-medium mb-6">
                  {internship.company}
                </h4>
                
                <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Highlights & Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {internship.highlights.map((highlight, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-sm rounded-md">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
