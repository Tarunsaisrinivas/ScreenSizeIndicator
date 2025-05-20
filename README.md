# Responsive Indicator 📱💻🖥️

A lightweight React component that displays the current Tailwind CSS-style screen size breakpoint (`sm`, `md`, `lg`, `xl`, `2xl`, `3xl`) based on the window width. This is useful for debugging responsive layouts during development.

---

## ✨ Features

- 🧠 Intelligent breakpoint detection
- 🎯 Tailwind-style size labels
- 🕶️ Supports dark and light themes
- 🔁 Real-time updates on window resize
- 📦 Easy to use and integrate

---

## 📦 Installation

If published to npm:
```bash
npm install screen-indicator

🚀 Usage

import { ResponsiveIndicator } from "screen-indicator";

function App() {
  return (
    <div>
      <ResponsiveIndicator />
      {/* Your application content */}
    </div>
  );
}

export default App;

