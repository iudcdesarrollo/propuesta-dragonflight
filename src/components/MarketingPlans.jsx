import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Share2, TrendingUp, ChevronDown, Megaphone, BarChart3, Smartphone, FileText, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const marketingPlansData = [
  {
    id: 1,
    phase: 'Plan 1',
    name: 'Presencia',
    price: "$2'000.000",
    description: 'Empiezas a existir en redes sociales',
    color: 'silver',
    highlights: [
      { icon: 'Smartphone', text: '2 redes sociales', detail: 'Instagram + Facebook' },
      { icon: 'FileText', text: '8 posts orgánicos al mes', detail: '2 por semana' },
      { icon: 'Megaphone', text: 'Campaña de anuncios', detail: 'En Facebook e Instagram' },
      { icon: 'BarChart3', text: 'Reporte quincenal', detail: 'Resultados claros cada 15 días' },
    ],
    social: [
      'Publicamos en Instagram y Facebook por ti',
      '8 publicaciones orgánicas al mes (2 por semana)',
      'Diseños atractivos para tu marca',
      'Copywriting y textos que conectan',
      'Creación de guiones y edición de videos *',
      'Planificación estratégica de contenidos',
      'Publicaciones programadas automáticamente',
      'Reporte quincenal de resultados',
    ],
    ads: [
      'Campaña de publicidad activa',
      'Llegamos a personas interesadas en tu zona',
      '2 anuncios con diseño profesional',
      'Ajustamos para mejores resultados',
      'Automatización constante de tu presupuesto por campaña',
    ],
    note: '* Material de videos proporcionado por el cliente',
    ideal: 'Para comenzar en redes',
    detailedDescription: 'Este plan es perfecto si nunca has tenido presencia en redes o si no tienes tiempo para manejarlas. Nos encargamos de crear contenido orgánico atractivo: diseño, planificación, copywriting, creación de guiones y edición. Tus publicaciones quedarán programadas automáticamente. Además, creamos una campaña de publicidad para que más personas te conozcan.',
  },
  {
    id: 2,
    phase: 'Plan 2',
    name: 'Crecimiento',
    price: "$2'500.000",
    description: 'Más redes, más contenido, más clientes',
    color: 'platinum',
    highlights: [
      { icon: 'Smartphone', text: '3 redes sociales', detail: 'Instagram + Facebook + TikTok' },
      { icon: 'FileText', text: '12 posts orgánicos al mes', detail: '3 por semana' },
      { icon: 'Megaphone', text: '2-3 campañas activas', detail: 'Más alcance y ventas' },
      { icon: 'Target', text: 'Retargeting activo', detail: 'Recuperamos visitantes interesados' },
    ],
    social: [
      'Publicamos en Instagram, Facebook y TikTok',
      '12 publicaciones orgánicas al mes (3 por semana)',
      'Estrategia mensual de contenidos',
      'Textos que venden y conectan',
      'Diseños profesionales para cada red',
      'Reportes con Google Analytics',
      'Automatizaciones con Meta para responder mensajes',
    ],
    ads: [
      '2-3 campañas funcionando al tiempo',
      'Llegamos a más personas y las seguimos',
      'Anuncios para conseguir contactos o ventas',
      'Probamos diferentes versiones para ver qué funciona',
      'Optimizamos cada semana',
      'Reporte claro de resultados y costos',
    ],
    note: '',
    ideal: 'Para crecer en serio',
    detailedDescription: 'Si ya tienes algo de presencia y quieres dar el salto, este plan es para ti. Añadimos TikTok para llegar a más personas, triplicamos el contenido y creamos múltiples campañas de publicidad. Probamos qué funciona mejor y optimizamos constantemente para que cada peso invertido rinda más.',
  },
  {
    id: 3,
    phase: 'Plan 3',
    name: 'Dominio',
    price: "$3'100.000",
    description: 'Presencia total en todas las redes',
    color: 'gold',
    featured: true,
    highlights: [
      { icon: 'Smartphone', text: '5 redes sociales', detail: 'Instagram, Facebook, TikTok, LinkedIn, YouTube' },
      { icon: 'FileText', text: '20-24 posts orgánicos al mes', detail: 'Incluye videos y reels' },
      { icon: 'Megaphone', text: 'Campañas completas', detail: 'Alcance + Contactos + Ventas' },
      { icon: 'BarChart3', text: 'Pruebas A/B de testeo', detail: 'Probamos qué funciona mejor para tu marca' },
    ],
    social: [
      'Publicamos en 5 redes: Instagram, Facebook, TikTok, LinkedIn y YouTube',
      '20-24 publicaciones orgánicas al mes',
      'Videos cortos con guión y edición profesional',
      'Estrategia completa de marca',
      'Creación de manual de marca e imagen corporativa',
      'Atención total a tu comunidad',
      'Respondemos todo: mensajes, comentarios, menciones',
      'Reportes avanzados con consejos estratégicos',
    ],
    ads: [
      'Campañas para: darte a conocer, conseguir contactos y vender',
      'Probamos constantemente qué funciona mejor',
      'Optimizamos todos los días',
      'Informe ejecutivo mensual fácil de entender',
    ],
    note: '',
    ideal: 'Para dominar el mercado',
    detailedDescription: 'Este es el plan completo. Estás en todas las redes importantes, con contenido de alta calidad incluyendo videos profesionales. Tus campañas de publicidad se optimizan diariamente y tienes acceso a un panel donde puedes ver cómo va todo en tiempo real. Es la opción para quienes quieren ser los líderes de su mercado.',
  },
];

const MarketingPlanCard = ({ plan, index, isInView, isExpanded, onToggle }) => {
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

  const getIcon = () => {
    if (plan.color === 'gold') return TrendingUp;
    if (plan.color === 'platinum') return Share2;
    return Megaphone;
  };

  const Icon = getIcon();

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
              Más completo
            </span>
          </div>
          {/* Desktop badge - absolute */}
          <div className="hidden sm:block absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-semibold rounded-full shadow-lg shadow-amber-500/30">
              <Star className="w-4 h-4" />
              Más completo
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
        <p className="text-base sm:text-lg leading-relaxed text-white">{plan.description}</p>

        {/* Price */}
        <div className={`text-2xl sm:text-3xl font-bold mt-4 ${getAccentColor()}`}>
          {plan.price}
          <span className="text-sm sm:text-base font-normal text-white/90 ml-1">COP</span>
          <span className="text-sm sm:text-base font-normal text-white/80 ml-1">/ mes</span>
        </div>
      </div>

      {/* Highlights - Lo que se ve primero */}
      <div className="mb-6 sm:mb-8">
        <div className="space-y-3">
          {plan.highlights.map((item, i) => {
            const IconComponent = {
              Smartphone,
              FileText,
              Megaphone,
              Target,
              BarChart3,
            }[item.icon];
            return (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconBg()}`}>
                  <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${getAccentColor()}`} />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-white">{item.text}</p>
                  <p className="text-sm sm:text-base text-white">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
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
        <span>{isExpanded ? 'Ocultar' : 'Ver plan completo'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Expandable Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
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
            <p className="text-sm text-white leading-relaxed mb-4">
              {plan.detailedDescription}
            </p>

            {/* Social List */}
            <div className="mb-4">
              <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${getAccentColor()}`}>
                Redes Sociales:
              </p>
              <ul className="space-y-1.5">
                {plan.social.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${getAccentColor()}`} />
                    <span className="text-xs sm:text-sm text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ads List */}
            <div className="mb-3">
              <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${getAccentColor()}`}>
                Publicidad:
              </p>
              <ul className="space-y-1.5">
                {plan.ads.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${getAccentColor()}`} />
                    <span className="text-xs sm:text-sm text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {plan.note && (
              <p className="text-xs text-amber-400 mt-3">
                {plan.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MarketingPlans = () => {
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

    if (isLeftSwipe && currentSlide < marketingPlansData.length - 1) {
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
    setCurrentSlide(prev => (prev + 1) % marketingPlansData.length);
  };

  const prevSlide = () => {
    setExpandedCards({});
    setCurrentSlide(prev => (prev - 1 + marketingPlansData.length) % marketingPlansData.length);
  };

  const goToSlide = (index) => {
    setExpandedCards({});
    setCurrentSlide(index);
  };

  return (
    <section id="marketing" ref={ref} className="py-12 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Planes de <span className="gradient-text">Marketing Digital</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-light">
            Haz crecer tu marca en redes sociales y atrae más clientes.
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
            disabled={currentSlide === marketingPlansData.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              currentSlide === marketingPlansData.length - 1
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
              {marketingPlansData.map((plan, index) => (
                <div key={plan.id} className="w-full flex-shrink-0 px-2">
                  <MarketingPlanCard
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
            {marketingPlansData.map((plan, index) => (
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
                aria-label={`Ir a plan ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
          {marketingPlansData.map((plan, index) => (
            <MarketingPlanCard
              key={plan.id}
              plan={plan}
              index={index}
              isInView={isInView}
              isExpanded={!!expandedCards[plan.id]}
              onToggle={() => handleToggle(plan.id)}
            />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-400 text-xs sm:text-sm text-center">
              * Presupuesto publicitario no incluido
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingPlans;
