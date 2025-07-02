// Application constants

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact'
}

export const SECTIONS = {
  HERO: 'hero',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  CONTACT: 'contact'
}

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/technicalarya0',
  LINKEDIN: 'https://linkedin.com/in/unmesh-arya',
  EMAIL: 'mailto:Nilesharya0@gmail.com',
  PHONE: 'tel:+918318055708'
}

export const PERSONAL_INFO = {
  NAME: 'Unmesh Arya',
  TITLE: 'Full-Stack Developer & Competitive Programmer',
  EMAIL: 'Nilesharya0@gmail.com',
  PHONE: '+91 8318055708',
  LOCATION: 'Dhanbad, Jharkhand, India',
  RESUME_URL: '/resume.pdf'
}

export const TECH_STACK = {
  LANGUAGES: ['C', 'C++', 'JavaScript', 'HTML', 'CSS'],
  FRONTEND: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS'],
  BACKEND: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'MVC'],
  DATABASES: ['MongoDB', 'Mongoose', 'MySQL'],
  TOOLS: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS'],
  FUNDAMENTALS: ['DBMS', 'OS', 'OOP', 'DSA']
}

export const COMPETITIVE_PROGRAMMING = {
  CODEFORCES: {
    RATING: 1428,
    RANK: 'Specialist'
  },
  LEETCODE: {
    RATING: 1744
  },
  PROBLEMS_SOLVED: '750+',
  ACHIEVEMENTS: [
    'CodeChef Global Rank 72 in Starters 186 (Div 4)',
    'Codeforces Global Rank 1462 in Round 1028 (Div. 2)'
  ]
}

export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.6,
  EXTRA_SLOW: 1.0
}

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
}

export const THEME_COLORS = {
  PRIMARY: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a'
  },
  GRADIENT: {
    BLUE_PURPLE: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    BLUE_TEAL: 'linear-gradient(135deg, #667eea 0%, #06b6d4 100%)',
    PURPLE_PINK: 'linear-gradient(135deg, #764ba2 0%, #f093fb 100%)'
  }
}

export const MESSAGES = {
  LOADING: 'Loading Portfolio...',
  ERROR: 'Something went wrong. Please try again.',
  SUCCESS: 'Message sent successfully!',
  FORM_VALIDATION: {
    REQUIRED: 'This field is required',
    EMAIL: 'Please enter a valid email address',
    MIN_LENGTH: 'Minimum length is {min} characters'
  }
}

export const API_ENDPOINTS = {
  CONTACT_FORM: '/api/contact',
  PROJECTS: '/api/projects',
  SKILLS: '/api/skills'
}

// Chatbot knowledge base categories
export const CHATBOT_CATEGORIES = {
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  COMPETITIVE: 'competitive',
  EDUCATION: 'education',
  CONTACT: 'contact'
}

// Form field configurations
export const FORM_FIELDS = {
  CONTACT: {
    NAME: {
      name: 'name',
      type: 'text',
      placeholder: 'Your Name',
      required: true
    },
    EMAIL: {
      name: 'email',
      type: 'email',
      placeholder: 'your.email@example.com',
      required: true
    },
    SUBJECT: {
      name: 'subject',
      type: 'text',
      placeholder: 'Project Discussion, Job Opportunity, etc.',
      required: true
    },
    MESSAGE: {
      name: 'message',
      type: 'textarea',
      placeholder: 'Tell me about your project or opportunity...',
      required: true,
      rows: 5
    }
  }
}
