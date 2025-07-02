import React from 'react'
import { motion } from 'framer-motion'

const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1, 
  initialDelay = 0,
  className = '',
  ...props 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Clone children and add motion variants
  const staggeredChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      )
    }
    return child
  })

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {staggeredChildren}
    </motion.div>
  )
}

export default StaggerContainer
