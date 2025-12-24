import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Strategy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '1',
      title: 'Plan Básico',
      keywords: ['Visibilidad', 'Marca', 'Conversión'],
      description: 'Entrada fácil al mundo digital propio',
    },
    {
      number: '2',
      title: 'Plan Medio',
      keywords: ['Control', 'Datos', 'Leads'],
      description: 'Recuperas el poder sobre tus clientes',
    },
    {
      number: '3',
      title: 'Plan Avanzado',
      keywords: ['Independencia', 'Tecnología', 'Escalabilidad'],
      description: 'Libertad total de Airbnb',
      isPremium: true,
    },
  ];

  const comparisons = [
    { label: 'HOY', sublabel: '100% Dependencia Airbnb', width: 100, type: 'dependency' },
    { label: 'P1', sublabel: 'Marca propia + Airbnb', width: 70, type: 'partial' },
    { label: 'P2', sublabel: 'Control de leads + Airbnb', width: 45, type: 'growing' },
    { label: 'P3', sublabel: 'Independencia Total', width: 10, type: 'independent' },
  ];

  return (
    <section id="estrategia" ref={ref} className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-block glass-card px-4 sm:px-6 py-2 sm:py-2.5 text-xs font-bold tracking-widest text-amber-400 mb-4 sm:mb-6">
            LÓGICA ESTRATÉGICA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Evolución <span className="gradient-text">Gradual</span>
          </h2>
        </motion.div>

        {/* Evolution Timeline */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className={`flex items-center gap-3 sm:gap-5 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 glass-card w-full lg:w-auto ${
                  step.isPremium
                    ? 'border-2 border-amber-500/50 glow-gold'
                    : 'border border-amber-500/20 hover:border-amber-500/40'
                }`}
              >
                {/* Number */}
                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 ${
                  step.isPremium
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black'
                    : 'bg-gradient-to-br from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/30'
                }`}>
                  {step.number}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{step.title}</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    {step.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                          step.isPremium
                            ? 'bg-amber-500/30 text-amber-300'
                            : 'bg-amber-500/15 text-amber-400/80'
                        }`}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80">{step.description}</p>
                </div>
              </motion.div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-amber-500 hidden lg:block"
                >
                  <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Comparison Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto glass-card p-5 sm:p-8 lg:p-10"
        >
          <h3 className="text-base sm:text-lg lg:text-xl text-center mb-6 sm:mb-8 lg:mb-10 text-white font-semibold">
            Dependencia de Airbnb por Plan
          </h3>

          <div className="space-y-4 sm:space-y-6">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex flex-col sm:grid sm:grid-cols-[60px_1fr] md:grid-cols-[70px_1fr_160px] items-start sm:items-center gap-2 sm:gap-4 lg:gap-6"
              >
                {/* Label + Sublabel for mobile */}
                <div className="flex items-center gap-3 sm:contents">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 ${
                    item.type === 'dependency' ? 'bg-red-900/30 text-red-400 border border-red-500/30' :
                    item.type === 'partial' ? 'bg-amber-900/30 text-amber-300 border border-amber-500/30' :
                    item.type === 'growing' ? 'bg-amber-700/30 text-amber-400 border border-amber-500/30' :
                    'bg-gradient-to-br from-amber-500 to-amber-600 text-black font-bold'
                  }`}>
                    {item.label}
                  </div>
                  <span className="text-xs sm:hidden text-white/70">{item.sublabel}</span>
                </div>

                {/* Bar */}
                <div className="h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden w-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.width}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.2, ease: 'easeOut' }}
                    className={`h-full rounded-full ${
                      item.type === 'dependency' ? 'bg-gradient-to-r from-red-600 to-red-500' :
                      item.type === 'partial' ? 'bg-gradient-to-r from-amber-700 to-amber-600' :
                      item.type === 'growing' ? 'bg-gradient-to-r from-amber-600 to-amber-500' :
                      'bg-gradient-to-r from-amber-500 to-amber-400'
                    }`}
                  />
                </div>

                {/* Sublabel - hidden on mobile, shown on md+ */}
                <span className="text-sm text-white/80 hidden md:block">{item.sublabel}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Strategy;
