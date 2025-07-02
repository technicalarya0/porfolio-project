# Unmesh Arya Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.  
Showcasing projects, skills, experience, and a custom AI-powered chatbot.

---

## 🚀 Features

- **Animated UI:** Smooth transitions and effects using Framer Motion.
- **Responsive Design:** Looks great on all devices.
- **Project Gallery:** Showcases full-stack and competitive programming projects with images and feature lists.
- **Skills Section:** Visual skill bars with professional icons.
- **Experience & About:** Highlights education, work, and achievements.
- **Contact Form:** Integrated with [Web3Forms](https://web3forms.com/) for secure submissions.
- **AI Chatbot:** Ask about Unmesh's skills, projects, and more.
- **Dark Glassmorphism Theme:** Modern glass-effect backgrounds.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Web3Forms](https://web3forms.com/) (Contact form backend)

---

## 📦 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/technicalarya0/porfolio-project.git
   cd porfolio-project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## 🖼️ Adding Project Images

- Place your project images in the `public/projects/` folder.
- Reference them in `src/data/projects.js` like:  
  `image: "/projects/your-image.png"`

---

## 📄 Environment Variables

Create a `.env` file for sensitive keys (already included for contact form):

```
VITE_APP_TITLE=Unmesh Arya Portfolio
VITE_CONTACT_EMAIL=your_email@email.com
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

---

## 📚 Folder Structure

```
src/
  components/
    layout/         # Header, Footer, Navigation
    sections/       # Hero, About, Experience, Projects, Skills, Contact
    chatbot/        # Chatbot, ChatInput, ChatMessage
    ui/             # Reusable UI components
    animations/     # Animation helpers
  data/             # skills.js, projects.js, experience.js
  hooks/            # Custom React hooks
  styles/           # Custom styles
  utils/            # Constants, helpers
public/
  projects/         # Project images
  resume.pdf        # Resume file
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Unmesh Arya**  
- [GitHub](https://github.com/technicalarya0)
- [LinkedIn](https://linkedin.com/in/unmesh-arya)
- [Email](mailto:Nilesharya0@gmail.com)

---

> Built with ❤️ using React, Vite, and Tailwind