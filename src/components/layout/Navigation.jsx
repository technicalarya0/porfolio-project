import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, FolderOpen, Award, Mail } from 'lucide-react'

const Navigation = ({ currentSection }) => {
  const [isVisible, setIsVisible] = useState(true)

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="glass-effect rounded-full p-2 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentSection === item.href.slice(1)
          
          return (
            <motion.a
              key={item.name}
              href={item.href}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative group ${
                isActive 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={item.name}
            >
              <Icon className="h-5 w-5" />
              
              {/* Tooltip */}
              <div className="absolute left-16 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.name}
              </div>
            </motion.a>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default Navigation
