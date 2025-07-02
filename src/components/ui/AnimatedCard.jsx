import React from 'react'
import { motion } from 'framer-motion'

const AnimatedCard = ({ 
  children, 
  delay = 0, 
  className = '', 
  hoverScale = 1.05,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`glass-effect rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
