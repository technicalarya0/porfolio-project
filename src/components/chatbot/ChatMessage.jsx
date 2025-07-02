import React from 'react'
import { motion } from 'framer-motion'
import { Bot, User } from 'lucide-react'

const ChatMessage = ({ message, index }) => {
  const isBot = message.sender === 'bot'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}
      
      <div
        className={`max-w-[75%] p-3 rounded-lg ${
          isBot
            ? 'bg-gray-800/50 text-gray-200'
            : 'bg-blue-500 text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap leading-relaxed">
          {message.text}
        </p>
        <span className="text-xs opacity-70 mt-2 block">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>

      {!isBot && (
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="h-4 w-4 text-white" />
        </div>
      )}
    </motion.div>
  )
}

export default ChatMessage
