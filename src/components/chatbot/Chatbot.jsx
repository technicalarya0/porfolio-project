import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Bot } from 'lucide-react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Unmesh's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const knowledgeBase = {
    skills: {
      keywords: ['skills', 'technologies', 'programming', 'languages', 'tech stack'],
      response: "Unmesh is proficient in:\n• Languages: C, C++, JavaScript, HTML, CSS\n• Frontend: React.js, Next.js, Redux, Tailwind CSS\n• Backend: Node.js, Express.js, REST APIs, JWT\n• Databases: MongoDB, Mongoose, MySQL\n• Tools: Git, GitHub, Postman, Docker, AWS\n• CS Fundamentals: DBMS, OS, OOP, Data Structures & Algorithms"
    },
    experience: {
      keywords: ['experience', 'work', 'internship', 'job', 'EY', 'Ernst & Young'],
      response: "Unmesh worked as a Summer Intern (Frontend Developer) at EY (Ernst & Young) from May-July 2024. Key achievements:\n• Developed user management system with React & TypeScript\n• Reduced administration time by 15%\n• Implemented Redux for state management\n• Improved load times by 25% through optimization\n• Collaborated in Agile methodology with daily stand-ups"
    },
    projects: {
      keywords: ['projects', 'portfolio', 'applications', 'built', 'developed'],
      response: "Unmesh has built several impressive projects:\n\n🔹 Expense Tracker: Full-stack Next.js app with authentication, data visualization, and real-time analytics\n🔹 Task Tracker: Secure React/Node.js app with JWT authentication and project organization\n🔹 Competitive Programming: 750+ problems solved across platforms with notable rankings"
    },
    competitive: {
      keywords: ['competitive', 'programming', 'codeforces', 'leetcode', 'contests', 'ranking'],
      response: "Unmesh is an accomplished competitive programmer:\n• Codeforces: Specialist rating (1428)\n• LeetCode: Rating 1744\n• 750+ DSA problems solved\n• CodeChef Global Rank 72 in Starters 186\n• Codeforces Global Rank 1462 in Round 1028\n• Strong foundation in algorithms and data structures"
    },
    education: {
      keywords: ['education', 'college', 'university', 'IIT', 'degree', 'study'],
      response: "Unmesh is pursuing his Bachelor of Technology in Electronics and Communication Engineering at Indian Institute of Technology (ISM) Dhanbad (Dec 2021 – May 2025). He also completed his 12th grade from The Gramodaya International College Mauranipur with CBSE board."
    },
    contact: {
      keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin'],
      response: "You can reach Unmesh through:\n📧 Email: Nilesharya0@gmail.com\n📱 Phone: 08318055708\n💼 LinkedIn: linkedin.com/in/unmesh-arya\n🐙 GitHub: github.com/technicalarya0\n\nFeel free to connect for opportunities, collaborations, or just to say hi!"
    },
    person: {
      keywords: ['unmesh', 'arya', 'unmesh arya'],
      response: "Unmesh Arya is a passionate Full-Stack Developer and Competitive Programmer. He is currently pursuing a B.Tech in Electronics and Communication Engineering at IIT (ISM) Dhanbad. With strong skills in modern JavaScript technologies, React.js, Node.js, and over 750+ competitive programming problems solved, Unmesh is dedicated to building efficient, scalable web applications and excelling in coding competitions."
    }
  }

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (value.keywords.some(keyword => message.includes(keyword))) {
        return value.response
      }
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Unmesh Arya. You can ask me about his skills, projects, experience, education, or how to contact him. What interests you most?"
    }
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about Unmesh? I'm here to help!"
    }
    return "That's an interesting question! I'd recommend asking about Unmesh's skills, projects, experience, education, or contact information. You can also reach out to him directly at Nilesharya0@gmail.com for more specific inquiries."
  }

  // Accept message as argument for ChatInput compatibility
  const handleSendMessage = async (msg) => {
    const input = typeof msg === "string" ? msg : ""
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(input),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  // For quick questions and fallback to input
  const handleQuickQuestion = (question) => {
    setIsOpen(true)
    setTimeout(() => {
      handleSendMessage(question)
    }, 200)
  }

  const quickQuestions = [
    "What are your technical skills?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?"
  ]

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[90vw] h-[600px] glass-effect rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-white/80 text-sm">Ask me about Unmesh!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-[400px] overflow-y-auto space-y-4">
              {messages.map((message, idx) => (
                <ChatMessage key={message.id} message={message} index={idx} />
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <ChatInput
              onSendMessage={handleSendMessage}
              disabled={isTyping}
              placeholder="Ask me anything about Unmesh..."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot