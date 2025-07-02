import React from 'react'
import { motion } from 'framer-motion'

const SkillBadge = ({ skill, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 bg-gray-800/50 rounded-full px-4 py-3 mb-3 hover:bg-gray-700/50 transition-all duration-300"
    >
      <span className="text-2xl">{skill.icon}</span>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-200 font-medium">{skill.name}</span>
          <span className="text-xs text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default SkillBadge
