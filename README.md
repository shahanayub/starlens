# 🌌 StarLens — Celestial Image Analysis Engine

**StarLens** is a full-stack, AI-powered night sky observation application. It processes uploaded night sky imagery and generates structured, Markdown-formatted astronomical reports detailing visible constellations, major stars, celestial target recommendations, and viewing conditions.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** HTML5, Tailwind CSS (Custom Dark Theme), JavaScript (ES6+), Marked.js (Markdown parser).
- **Backend:** Node.js, Express.js, Multer (In-memory file uploads), Dotenv, CORS.
- **AI Hardware & Inference:** **Groq LPU (Language Processing Unit) Infrastructure**.
- **Model Used:** `openai/gpt-oss-120b` (Hosted on Groq Cloud).

---

## 🚀 Key Features

- **Groq LPU Acceleration:** Sub-second API response times using Groq's high-speed LPU cloud hardware.
- **Rich Markdown Telemetry:** Formatted observation reports with custom CSS table styling, callouts, blockquotes, and headers via `marked.js`.
- **In-Memory File Handlers:** Express server processes image streams entirely in memory with zero temporary disk bloat.
- **Clean Observatory UI:** Dark sky HUD interface equipped with ambient cosmic glow, star dust animations, and step progress indicators.

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A free **Groq API Key** from [Groq Console](https://console.groq.com/)

---

### 1. Clone & Configure Backend

```bash
cd Backend
npm install
