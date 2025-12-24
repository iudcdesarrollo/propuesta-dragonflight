import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Globe, Target, Rocket, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const plansData = [
  {
    id: 1,
    phase: 'Fase 1',
    name: 'Visibilidad',
    price: "$2'000.000",
    description: 'Tu marca empieza a existir en internet',
    icon: Globe,
    color: 'silver',
    web: [
      'Sitio web profesional de tu marca',
      'Se ve perfecto en celular y computador',
      'Galería con fotos de tus propiedades',
      'Portafolio completo de servicios y productos',
      'Tu negocio aparece en internet y se posiciona en Google',
      'Botón de WhatsApp para contacto directo',
    ],
    ideal: 'Ideal para empezar',
    detailedDescription: 'En esta fase creamos tu presencia en internet. Tendrás un sitio web profesional que muestra tu marca, propiedades y todo tu portafolio de servicios. Incluye adaptación a múltiples idiomas para recibir clientes internacionales, optimización SEO para que Google te posicione mejor, y un blog automatizado con inteligencia artificial que genera contenido relevante sobre tu zona y servicios de forma automática. Seguirás usando Airbnb para reservas, pero ahora los clientes también te encontrarán en Google. Es el primer paso para dejar de ser invisible.',
  },
  {
    id: 2,
    phase: 'Fase 2',
    name: 'Control',
    price: "$2'600.000",
    description: 'Empiezas a conseguir clientes directos',
    icon: Target,
    color: 'platinum',
    web: [
      'Todo lo de Fase 1',
      'Formularios para que te contacten',
      'Generación de bases de datos',
      'Mapa interactivo de ubicaciones',
      'Videos de testimonios (proporcionados por el cliente)',
      'Páginas especiales por zona turística',
    ],
    ideal: 'Mayor rentabilidad',
    detailedDescription: 'En esta fase tomas el control de tu negocio. Añadimos formularios para que los clientes te contacten directamente y guardamos sus datos en una base de datos propia. Incluye un mapa interactivo donde tus visitantes pueden ver la ubicación de tus propiedades y los centros de experiencia cercanos (restaurantes, tours, playas, etc.). Creamos páginas especiales para cada zona turística donde operas, optimizadas con GEO (posicionamiento geográfico) para que aparezcas cuando busquen alojamiento en esa zona específica. También incluimos videos de testimonios de clientes satisfechos que generan confianza y credibilidad. Ya no dependes solo de Airbnb. Menos comisiones, más control.',
  },
  {
    id: 3,
    phase: 'Fase 3',
    name: 'Independencia',
    price: "$4'000.000",
    description: 'Tu propia plataforma de reservas',
    icon: Rocket,
    color: 'gold',
    web: [
      'Todo lo de Fase 1 y 2',
      'Sistema de reservas propio',
      'Pasarela de pagos integrada',
      'Velocidad máxima de carga',
      'Videos promocionales con IA',
      'Panel administrativo',
    ],
    ideal: 'Máxima libertad',
    featured: true,
    detailedDescription: 'Libertad total. Los clientes reservan y pagan directamente en tu web con pasarela de pagos segura, sin intermediarios. Tu sitio carga ultra rápido para no perder visitantes. Incluye videos promocionales generados con inteligencia artificial para mostrar tus propiedades de forma atractiva. Tu panel administrativo te permite controlar todo: precios, disponibilidad, calendario de reservas, políticas de cancelación, gestión de clientes, reportes de ingresos y estadísticas de tu negocio. Cero comisiones a plataformas. Tu negocio, tus reglas. Airbnb pasa a ser solo un canal más, no tu dueño.',
  },
];

const PlanCard = ({ plan, index, isInView, isExpanded, onToggle }) => {
  const Icon = plan.icon;

  const getCardStyle = () => {
    if (plan.color === 'gold') {
      return 'bg-gradient-to-b from-amber-500/20 via-amber-500/10 to-amber-500/5 border-2 border-amber-500/40 shadow-[0_0_60px_rgba(212,175,55,0.15)]';
    }
    if (plan.color === 'platinum') {
      return 'bg-gradient-to-b from-slate-300/15 via-slate-400/8 to-slate-500/3 border-2 border-slate-300/30 shadow-[0_0_50px_rgba(203,213,225,0.1)]';
    }
    if (plan.color === 'silver') {
      return 'bg-gradient-to-b from-zinc-400/12 via-zinc-500/6 to-zinc-600/3 border-2 border-zinc-400/25 shadow-[0_0_40px_rgba(161,161,170,0.08)]';
    }
    return 'bg-white/[0.03] border border-white/[0.08]';
  };

  const getAccentColor = () => {
    if (plan.color === 'gold') return 'text-amber-400';
    if (plan.color === 'platinum') return 'text-slate-300';
    if (plan.color === 'silver') return 'text-zinc-400';
    return 'text-white/40';
  };

  const getIconBg = () => {
    if (plan.color === 'gold') return 'bg-gradient-to-br from-amber-500/30 to-amber-600/20 border border-amber-500/30';
    if (plan.color === 'platinum') return 'bg-gradient-to-br from-slate-300/25 to-slate-400/15 border border-slate-300/30';
    if (plan.color === 'silver') return 'bg-gradient-to-br from-zinc-400/20 to-zinc-500/10 border border-zinc-400/25';
    return 'bg-white/5 border border-white/10';
  };

  const getBtnStyle = () => {
    if (plan.color === 'gold') return 'bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30 text-amber-400';
    if (plan.color === 'platinum') return 'bg-slate-300/15 border-slate-300/25 hover:bg-slate-300/25 text-slate-300';
    if (plan.color === 'silver') return 'bg-zinc-400/15 border-zinc-400/20 hover:bg-zinc-400/25 text-zinc-400';
    return 'bg-white/5 border-white/10 hover:bg-white/10 text-white/60';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${plan.featured ? 'pt-8 sm:pt-6 md:pt-8 lg:pt-10' : 'pt-5 sm:pt-6 md:pt-8 lg:pt-10'} pb-5 px-5 sm:pb-6 sm:px-6 md:pb-8 md:px-8 lg:pb-10 lg:px-10 rounded-2xl sm:rounded-3xl transition-all duration-500 h-full flex flex-col ${getCardStyle()}`}
    >
      {/* Featured badge - Mobile: inside card, Desktop: absolute */}
      {plan.featured && (
        <>
          {/* Mobile badge - inside flow */}
          <div className="sm:hidden flex justify-center -mt-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-xs font-semibold rounded-full shadow-lg shadow-amber-500/30">
              <Star className="w-3.5 h-3.5" />
              Recomendado
            </span>
          </div>
          {/* Desktop badge - absolute */}
          <div className="hidden sm:block absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-semibold rounded-full shadow-lg shadow-amber-500/30">
              <Star className="w-4 h-4" />
              Recomendado
            </span>
          </div>
        </>
      )}

      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${getIconBg()}`}>
            <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${getAccentColor()}`} />
          </div>
          <div>
            <div className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 ${
              plan.color === 'gold'
                ? 'bg-gradient-to-r from-amber-500/30 to-amber-600/20 text-amber-300 border border-amber-500/40'
                : plan.color === 'platinum'
                ? 'bg-gradient-to-r from-slate-200/20 to-slate-300/15 text-slate-200 border border-slate-300/30'
                : 'bg-gradient-to-r from-zinc-300/15 to-zinc-400/10 text-zinc-300 border border-zinc-400/25'
            }`}>
              {plan.phase}
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{plan.name}</h3>
          </div>
        </div>
        <div className={`text-2xl sm:text-3xl font-bold mb-2 ${getAccentColor()}`}>
          {plan.price}
          <span className="text-sm sm:text-base font-normal text-white/90 ml-1">COP</span>
          <span className="text-sm sm:text-base font-normal text-white/80 ml-1">/ mes</span>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-white">{plan.description}</p>
      </div>

      {/* Web Section */}
      <div className="mb-6 sm:mb-8">
        <ul className="space-y-2 sm:space-y-3">
          {plan.web.map((item, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <Check className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${getAccentColor()}`} />
              <span className="text-sm sm:text-base text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer with ideal text */}
      <div className={`pt-4 sm:pt-5 mt-auto border-t border-white/[0.08]`}>
        <span className={`text-sm sm:text-base font-medium ${getAccentColor()}`}>
          {plan.ideal}
        </span>
      </div>

      {/* Expand Button - Compacto */}
      <button
        onClick={onToggle}
        className={`w-full mt-3 sm:mt-4 py-2.5 sm:py-3 px-4 rounded-xl border transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium ${getBtnStyle()}`}
      >
        <span>{isExpanded ? 'Ocultar' : 'Ver más detalles'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-out ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Expandable Content */}
      <div
        className={`grid transition-all duration-500 ease-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className={`p-4 sm:p-5 rounded-xl ${
            plan.color === 'gold' ? 'bg-amber-500/10 border border-amber-500/30' :
            plan.color === 'platinum' ? 'bg-slate-300/10 border border-slate-300/25' :
            plan.color === 'silver' ? 'bg-zinc-400/10 border border-zinc-400/20' :
            'bg-white/5 border border-white/10'
          }`}>
            <p className="text-sm text-white leading-relaxed">
              {plan.detailedDescription}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Plans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [expandedCards, setExpandedCards] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < plansData.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  const handleToggle = (planId) => {
    setExpandedCards(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const nextSlide = () => {
    setExpandedCards({});
    setCurrentSlide(prev => (prev + 1) % plansData.length);
  };

  const prevSlide = () => {
    setExpandedCards({});
    setCurrentSlide(prev => (prev - 1 + plansData.length) % plansData.length);
  };

  const goToSlide = (index) => {
    setExpandedCards({});
    setCurrentSlide(index);
  };

  return (
    <section id="planes" ref={ref} className="py-12 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Tu evolución en <span className="gradient-text">3 fases</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-light">
            Cada fase te acerca más a la independencia digital.
          </p>
        </motion.div>

        {/* Mobile Slider with Touch Support */}
        <div className="md:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              currentSlide === 0
                ? 'bg-white/5 text-white/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === plansData.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              currentSlide === plansData.length - 1
                ? 'bg-white/5 text-white/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Slider Container */}
          <div
            className="overflow-hidden mx-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {plansData.map((plan, index) => (
                <div key={plan.id} className="w-full flex-shrink-0 px-2">
                  <PlanCard
                    plan={plan}
                    index={index}
                    isInView={isInView}
                    isExpanded={!!expandedCards[plan.id]}
                    onToggle={() => handleToggle(plan.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {plansData.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? plan.color === 'gold'
                      ? 'bg-amber-400 w-8'
                      : plan.color === 'platinum'
                      ? 'bg-slate-300 w-8'
                      : 'bg-zinc-400 w-8'
                    : 'bg-white/20 w-2 hover:bg-white/40'
                }`}
                aria-label={`Ir a fase ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
          {plansData.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={index}
              isInView={isInView}
              isExpanded={!!expandedCards[plan.id]}
              onToggle={() => handleToggle(plan.id)}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <span className="text-amber-400 text-xs sm:text-sm text-center">
                Hosting incluido en todos los planes
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white/90 text-xs sm:text-sm text-center">
                * El costo del dominio es adicional
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;
