import React from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'

const ProjectCard = ({ project }) => (
  <div className="glass-effect rounded-xl p-6 h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative mb-6 rounded-lg overflow-hidden">
      <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
        {/* You can replace this with a project image if available */}
        <span className="text-5xl text-blue-400">{project.icon || '💻'}</span>
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
          {project.category}
        </span>
      </div>
      <p className="text-gray-400 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-blue-400">Key Features:</h4>
        <ul className="text-sm text-gray-400 space-y-1">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Star className="h-3 w-3 text-blue-400 mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <Github className="h-4 w-4" />
          <span className="text-sm">Code</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="text-sm">Demo</span>
        </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
