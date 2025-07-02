import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Full-Stack Developer & Competitive Programmer"
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/technicalarya0", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/unmesh-arya", label: "LinkedIn" },
    { icon: Mail, href: "mailto:Nilesharya0@gmail.com", label: "Email" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">UA</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Unmesh Arya</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
          >
            <span className="typing-animation">{text}</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating efficient, scalable web applications with 1+ year of hands-on experience 
            in modern JavaScript technologies. Specialized in React.js, Node.js, and competitive programming 
            with 750+ problems solved across various platforms.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Unmesh-Arya-Resume.pdf"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  )
}

export default Hero
