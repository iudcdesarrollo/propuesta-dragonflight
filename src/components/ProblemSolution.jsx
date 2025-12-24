import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const problems = [
    { text: 'Airbnb decide cuándo te muestran', detail: 'Tu visibilidad depende de su algoritmo' },
    { text: 'Comisiones de hasta 15% por reserva', detail: 'Dinero que podría ser tuyo' },
    { text: 'Sin acceso a datos de tus huéspedes', detail: 'No puedes fidelizar clientes' },
    { text: 'Compites contra miles de anuncios', detail: 'Difícil destacar en el mar de opciones' },
  ];

  const solutions = [
    { text: 'Te encuentran en Google directo', detail: 'Posicionamiento SEO propio' },
    { text: 'Marca profesional que genera confianza', detail: 'Imagen que te diferencia' },
    { text: 'Base de datos de clientes propia', detail: 'Contacto directo y remarketing' },
    { text: 'Presencia en múltiples canales', detail: 'Web + Redes + Google' },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Del problema a la <span className="gradient-text">solución</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-light">
            Transforma las limitaciones en oportunidades.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-5 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-950/80 via-red-900/40 to-transparent border border-red-500/30 shadow-xl shadow-red-500/5"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-500/25 flex items-center justify-center border border-red-500/40">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Sin presencia web</h3>
                <p className="text-xs sm:text-sm text-red-400/80">Lo que estás perdiendo</p>
              </div>
            </div>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm sm:text-base block">{p.text}</span>
                    <span className="text-white/95 text-xs sm:text-sm">{p.detail}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-5 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-900/50 via-amber-800/20 to-transparent border border-amber-500/40 shadow-xl shadow-amber-500/10"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/30 flex items-center justify-center border border-amber-500/50">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Con tu sitio web</h3>
                <p className="text-xs sm:text-sm text-amber-400/80">Lo que vas a ganar</p>
              </div>
            </div>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm sm:text-base block">{s.text}</span>
                    <span className="text-white/95 text-xs sm:text-sm">{s.detail}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
