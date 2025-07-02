// Framer Motion animation variants and utilities

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export const slideUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
}

export const hoverLift = {
  y: -5,
  scale: 1.02,
  transition: { duration: 0.2 }
}

// Loading animations
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
}

// Modal animations
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
}

export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

// Text animations
export const textReveal = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Card animations
export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
  transition: { duration: 0.3 }
}

// Button animations
export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
}

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
}
