
# Unmask AI - Frontend

Unmask AI is a neural processing engine designed to detect disinformation, political propaganda, and ideological biases in digital media. This backend handles image processing, text extraction via OCR, and semantic analysis using advanced language models.





![Status](https://img.shields.io/badge/Status-In--Development-yellow?style=for-the-badge)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

---

### Tech Stack Badges

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

---
## Tech Stack

### Frontend
* **React**: Library for building the user interface.
* **TailwindCSS**: Utility-first CSS framework for custom styling.

### Backend
* **Node.js**: JavaScript runtime environment.
* **Express**: Web framework for building the API REST.

### Infrastructure & Tools
* **Render**: Cloud platform for hosting the backend service.
* **Vercel**: Cloud platform for hosting the web server.
* **Vite**: Frontend build tool for optimized development.

## Features

* **Visual Analysis**: High-fidelity live previews for uploaded images.
* **Responsive Design**: Fully cross-platform compatibility (Mobile/Desktop).
* **AI-Powered Insights**: Real-time detection of political bias and disinformation.
* **Premium Interface**: Dark-themed UI with glassmorphism effects and optimized reading mode.
* **Interactive Samples**: One-click test cases for quick tool demonstration.
## Why Unmask AI?

### The Inspiration
In an era where digital content is consumed at an unprecedented pace, the line between factual reporting and ideological propaganda has become dangerously thin. **Unmask AI** was born from the necessity to provide citizens with a "digital shield"—a tool that doesn't just show an image, but explains the underlying intent and bias behind it. I believe that transparency is the first step toward a more critical and informed society.

### Why This Interests Me
I am deeply fascinated by the intersection of **Artificial Intelligence** and **Sociology**. Building tools that can interpret human nuances—like political bias or emotional manipulation—represents one of the most exciting challenges in modern software development. This project allowed me to explore how neural networks can be used not just for automation, but for digital literacy and truth-seeking.

### Key Learnings
Developing this project has been a transformative experience where I gained hands-on expertise in:

* **AI Orchestration**: Learning how to bridge the gap between raw image data and complex LLM reasoning through an efficient Node.js middleware.
* **Security & Data Ethics**: Handling Base64 data in-memory to ensure user privacy and understanding the implications of processing sensitive political content.
* **Performance Optimization**: Managing the latency between OCR extraction and AI analysis to provide a smooth, "live" user experience.
* **Full-Stack Resilience**: Building a robust error-handling system to manage service timeouts and 403/500 status codes from external providers.

## Deep Dive: Challenges & Resilience

### Technical Challenges Overcome
The development of Unmask AI presented several complex hurdles that required a structured engineering approach:

* **Latency Management**: Analyzing an image involves multiple steps (Base64 encoding, OCR extraction, and AI reasoning). I optimized the backend flow to ensure that these asynchronous calls don't block the main thread, maintaining a fast response time for the UI.
* **Data Integrity**: Implementing robust error handling (managing 500 and 400 status codes) was crucial. I designed the backend to provide meaningful feedback to the frontend, ensuring the application doesn't crash when an external service is unavailable.

### My Vision for the Project
I see **Unmask AI** as more than just a tool; it is a statement on the importance of digital literacy. In a world of "deepfakes" and automated propaganda, software must evolve to become an ally of truth. My commitment through this project was to build a system that is transparent, fast, and, above all, useful for the end-user.

### Final Reflections
Building this backend from scratch allowed me to consolidate my knowledge in **Node.js** and **System Integration**. It reinforced my belief that the most powerful applications are those that solve human problems using high-end technology.
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://luisdeleon.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-de-le%C3%B3n/)



## Related

Here is the backend of this proyect

[Unmask AI - Backend](https://github.com/LuisDeLeon24/Unmask-AI---Backend.git)
