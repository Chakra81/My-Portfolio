import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../utils/constants';
import { Trophy, Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative bg-black/20">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Certifications */}
          <div>
            <SectionHeading title="Certifications" subtitle={true} />
            <div className="space-y-4 mt-8">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Award size={20} />
                  </div>
                  <p className="text-gray-300 font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <SectionHeading title="Achievements" subtitle={true} />
            <div className="space-y-4 mt-8">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-5 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors"
                >
                  <div className="p-3 bg-accent/10 rounded-lg text-accent shrink-0">
                    <Trophy size={20} />
                  </div>
                  <p className="text-gray-300 font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
