import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" ref={ref} className="py-16 sm:py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/8 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-300">Tu siguiente paso</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Elige el plan que mejor se <span className="gradient-text">ajuste a ti</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed mb-8 sm:mb-10">
            Cada negocio es único. Selecciona la combinación de servicios web y marketing que impulse tu crecimiento.
          </p>

          {/* Visual separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-amber-500/50 via-amber-400 to-amber-500/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
