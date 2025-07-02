import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Paperclip } from 'lucide-react'

const ChatInput = ({ onSendMessage, disabled = false, placeholder = "Type your message..." }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700/50">
      <div className="flex gap-2 items-end">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="w-full bg-gray-800/50 text-white placeholder-gray-400 px-4 py-3 pr-12 rounded-lg border border-gray-600/50 focus:border-blue-500 focus:outline-none resize-none min-h-[44px] max-h-24"
            disabled={disabled}
            rows={1}
          />
          
          {/* Optional: Attachment button */}
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
            title="Attach file"
          >
            <Paperclip className="h-4 w-4" />
          </button>
        </div>
        
        <motion.button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          disabled={disabled || !message.trim()}
          title="Send message"
        >
          <Send className="h-4 w-4" />
        </motion.button>
      </div>
    </form>
  )
}

export default ChatInput
