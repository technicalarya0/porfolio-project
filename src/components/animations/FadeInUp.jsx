import React from 'react'
import { motion } from 'framer-motion'

const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  distance = 30,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: distance 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0 
      }}
      viewport={{ once: true }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FadeInUp
