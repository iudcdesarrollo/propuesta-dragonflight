import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToPlanes = (e) => {
    e.preventDefault();
    document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-0 sm:min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-8 sm:py-20 lg:py-24 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20"
          >
            <span className="text-sm font-medium text-amber-300 tracking-wide">Propuesta Exclusiva 2025</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1]"
          >
            <span className="text-white">Tu camino hacia la</span>
            <br />
            <span className="gradient-text">independencia digital</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-10 sm:mb-12 font-light leading-relaxed px-2 sm:px-0"
          >
            Transforma tu negocio de alojamiento.
            <span className="text-white font-normal"> Deja de depender de Airbnb</span> y construye tu propia marca.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center px-4 sm:px-0"
          >
            <motion.a
              href="#planes"
              onClick={scrollToPlanes}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-4 text-base sm:text-lg font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Explorar planes
              <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-16"
          >
            <div className="flex justify-center gap-6 sm:gap-12 md:gap-20">
              {[
                { value: '3', label: 'Fases de evolución' },
                { value: '360°', label: 'Solución completa' },
                { value: '0%', label: 'Comisiones Airbnb' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/95 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
