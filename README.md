# Stopwatch App

The **Stopwatch App** is a simple and interactive time-tracking application built using **HTML, CSS, and JavaScript**. It provides core stopwatch functionality such as starting, stopping, resetting the timer, and recording lap times. The project is designed to demonstrate JavaScript timing functions and dynamic DOM updates in a clean and user-friendly interface.

---

## Description

This application displays a digital timer that counts seconds in real time. Users can control the timer using clearly labeled buttons for **Start**, **Stop**, and **Reset**. Once started, the timer increments every second using JavaScript’s `setInterval` method. The start button is automatically disabled while the timer is running to prevent multiple intervals from being created.

The app also includes a **Lap** feature, allowing users to record the current time without stopping the timer. Each lap entry is added to a list below the timer and numbered sequentially for clarity. A **Clear Laps** option is provided to remove all recorded laps and reset the lap counter.

The interface is styled using CSS with a structured layout, rounded buttons, hover effects, and a dedicated section for lap times. A scrollable lap list ensures usability even when multiple laps are recorded.

---

## Features

- Start, stop, and reset stopwatch
- Second-based time tracking
- Record and display lap times
- Clear all lap records
- Disabled start button while running
- Clean and responsive UI design

---

## Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Styling, layout, and visual enhancements  
- **JavaScript** – Timer logic, event handling, and DOM manipulation  

---

## How It Works

1. Click **Start** to begin the stopwatch.
2. Click **Stop** to pause the timer.
3. Click **Reset** to reset the timer to zero.
4. Click **Lap** to record the current time.
5. Click **Clear Laps** to remove all lap entries.

---

## Project Structure

```
stopwatch-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Learning Outcomes

- Working with `setInterval` and `clearInterval`
- Managing UI state with JavaScript
- Dynamic list creation and updates
- Event handling and DOM manipulation
- Styling interactive components with CSS

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stopwatch-app.git
   ```
2. Open `index.html` in your browser.
3. Use the controls to track time and laps.

---

## License

This project is open-source and intended for educational and personal use.
