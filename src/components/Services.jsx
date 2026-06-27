import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../utils/constants';
import { LayoutGrid } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto">
        <SectionHeading title="Services" subtitle={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass p-8 rounded-2xl text-center group hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/20 transition-all duration-500"
            >
              <div className="mx-auto w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <LayoutGrid size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-white group-hover:text-primary transition-colors">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
