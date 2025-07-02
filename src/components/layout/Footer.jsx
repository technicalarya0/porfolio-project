import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => (
  <footer className="py-8 bg-slate-900/80 mt-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Unmesh Arya. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/technicalarya0"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500/30 transition"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/unmesh-arya"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500/30 transition"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:Nilesharya0@gmail.com"
          className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500/30 transition"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
