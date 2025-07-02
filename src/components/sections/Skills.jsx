import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../../data/skills'

const SkillBadge = ({ skill }) => (
  <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2 mb-2">
    <span className="text-lg">
      {skill.icon && <skill.icon color={skill.color} />}
    </span>
    <span className="text-gray-200 font-medium">{skill.name}</span>
    <div className="w-24 h-2 bg-blue-500/20 rounded-full ml-2">
      <div
        className="h-2 bg-blue-500 rounded-full"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
)

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A diverse toolkit for building robust, scalable web applications.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 capitalize">{category}</h3>
            <div>
              {skills.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
