import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Posiciones dentro del Hero (esquinas para no tapar contenido)
const positions = [
  { name: 'bottom-right', className: 'bottom-6 right-6', initial: { x: 100, y: 50 }, exit: { x: 100, y: 50 }, size: 'small' },
  { name: 'bottom-left', className: 'bottom-6 left-6', initial: { x: -100, y: 50 }, exit: { x: -100, y: 50 }, size: 'small' },
  { name: 'top-right', className: 'top-24 right-6', initial: { x: 100, y: -50 }, exit: { x: 100, y: -50 }, size: 'normal' },
  { name: 'top-left', className: 'top-24 left-6', initial: { x: -100, y: -50 }, exit: { x: -100, y: -50 }, size: 'normal' },
];

const DragonOverlay = () => {
  const [showDragon, setShowDragon] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const lastPositionRef = useRef(-1);

  // Detectar si es desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Ocultar INSTANTÁNEAMENTE cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowDragon(false);
        setIsInHero(false);
      } else {
        setIsInHero(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para obtener una posición diferente a la anterior
  const getNextPosition = () => {
    let newPos;
    do {
      newPos = Math.floor(Math.random() * positions.length);
    } while (newPos === lastPositionRef.current && positions.length > 1);
    lastPositionRef.current = newPos;
    return newPos;
  };

  useEffect(() => {
    if (!isDesktop) return;

    // Mostrar el dragón inmediatamente
    setCurrentPosition(getNextPosition());
    setShowDragon(true);

    // Configurar intervalo para mostrar cada 5 segundos
    const interval = setInterval(() => {
      setCurrentPosition(getNextPosition());
      setShowDragon(true);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isDesktop]);

  // Ocultar después de 4 segundos
  useEffect(() => {
    if (showDragon) {
      const hideTimeout = setTimeout(() => {
        setShowDragon(false);
      }, 4000);
      return () => clearTimeout(hideTimeout);
    }
  }, [showDragon]);

  // Solo mostrar en desktop y cuando está en el Hero
  if (!isDesktop || !isInHero) return null;

  const pos = positions[currentPosition];

  return (
    <AnimatePresence>
      {showDragon && (
        <motion.div
          key={currentPosition}
          initial={{ opacity: 0, ...pos.initial, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            exit: { duration: 0.1 } // Salida instantánea
          }}
          className={`fixed ${pos.className} z-30 pointer-events-none`}
        >
          <div
            className={`relative ${pos.size === 'small' ? 'w-56 h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72' : 'w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96'}`}
            style={{ mixBlendMode: 'screen' }}
          >
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-contain"
              onEnded={() => setShowDragon(false)}
            >
              <source src="/img/1223.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DragonOverlay;
