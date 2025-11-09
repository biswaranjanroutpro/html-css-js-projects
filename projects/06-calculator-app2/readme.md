# 🧮 Calculator App

A simple yet beautifully designed **web-based calculator** built using **HTML, CSS, and JavaScript**.  
It performs basic arithmetic operations with a sleek **glassmorphism UI** inspired design.  

---

## ✨ Features

- ✅ Perform basic operations — Addition, Subtraction, Multiplication, Division, and Modulus (%)
- 🧊 Modern **Glassmorphism UI**
- 📱 Fully responsive design (works on mobile and desktop)
- 🧹 “AC” (All Clear) and “DEL” (Delete last digit) functionality
- ⚙️ Real-time display update as you click buttons
- 💡 Smooth hover and click effects for better interactivity

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the calculator |
| **CSS3** | Styling and animations (Glassmorphism design) |
| **JavaScript (ES6)** | Calculator logic and interactivity |

---

## 🗂️ Project Structure

calculator-app/
│
├── index.html # Main HTML file (calculator layout)
├── style.css # CSS styling (UI design)
├── script.js # JavaScript logic (button handling & evaluation)
└── README.md # Documentation


---

## 🧩 How It Works

1. Each calculator button (`<button>`) is detected using JavaScript event listeners.
2. When a button is clicked:
   - Numbers and operators are appended to the display.
   - **AC** clears the entire display.
   - **DEL** removes the last entered character.
   - **=** evaluates the entered expression and displays the result.
3. Evaluation is handled safely using JavaScript’s built-in `Function()` constructor instead of raw `eval()`.

---

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/calculator-app.git

```
