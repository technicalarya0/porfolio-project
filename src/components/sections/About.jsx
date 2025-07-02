import React from 'react'
import { motion } from 'framer-motion'

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          I'm <b>Unmesh Arya</b>, a passionate Full-Stack Developer and Competitive Programmer with 1+ year of experience building secure, performant web applications. I thrive on solving complex problems and delivering robust solutions using modern JavaScript technologies.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed glass-effect rounded-xl p-8"
      >
        <p>
          I specialize in <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>, with a strong foundation in <b>Data Structures & Algorithms</b> (750+ problems solved). My approach blends clean code, security best practices, and a keen eye for UI/UX.
        </p>
        <p>
          <b>Competitive Programming:</b> I'm a <b>Specialist (1439)</b> at <b>Codeforces</b> and have a <b>1744 rating</b> on <b>LeetCode</b>. I'm also highly skilled in <b>C++</b> and have demonstrated strong problem-solving abilities in competitive programming.
        </p>
        <p>
          Currently, I'm pursuing my B.Tech in Electronics and Communication Engineering at <b>IIT (ISM) Dhanbad</b>. I love collaborating on challenging projects and continuously improving my craft.
        </p>
      </motion.div>
    </div>
  </section>
)

export default About
