import React from 'react'
import { motion } from 'framer-motion'
import { experienceData } from '../../data/experience'

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Hands-on industry experience in frontend development and agile teams.
        </p>
      </motion.div>
      <div className="max-w-3xl mx-auto space-y-10">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-effect rounded-xl p-8 flex flex-col md:flex-row items-start gap-6"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <img
                  src='ernst-young-ey-logo.png'
                  alt={exp.company}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
              <div className="text-blue-400 font-medium">{exp.company}</div>
              <div className="text-gray-400 text-sm mb-2">
                {exp.duration} &mdash; {exp.location}
              </div>
              <ul className="list-disc pl-6 text-gray-300">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
