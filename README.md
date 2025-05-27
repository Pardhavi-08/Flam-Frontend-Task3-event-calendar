# 📅 React Event Calendar (Flam Frontend Task 3)

A simple yet powerful event calendar built using **React** and **Vite**. It allows users to schedule events with custom dates, times, and colors. Events are stored in `localStorage`, so they persist even after a page refresh.

---

## Features

- Add events with:
  - Title  
  - Start and end **date**  
  - Start and end **time** (AM/PM format)  
  - Custom **event color**

- Recurrence options: **Daily**, **Weekly**, **Monthly**  
- Search events by title  
- Edit and delete existing events  
- Events saved using browser `localStorage`  
- Clean, responsive UI with smooth interactions

---

##  Technologies Used

-  **React** (Functional components + Hooks)  
-  **Vite** (Development & Build Tool)  
-  **Context API** (Global State Management)  
-  **date-fns** (Date manipulation)  
-  **CSS** (Custom styling, responsive layout)

---

## Prerequisites

- Node.js and npm installed on your system

---
## Installation

*Clone the repository:*

   ```bash
   git clone https://github.com/Pardhavi-08/Flam-Frontend-Task3-event-calendar.git
   cd Flam-Frontend-Task3-event-calendar

*Install dependencies:*
Ensure you are in the correct directory. 
bash
npm install

*Start the development server:*
bash
npm run dev


## Project Structure

src/
├── components/
│   ├── Calendar.jsx
│   ├── DayCell.jsx
│   └── EventModal.jsx
├── context/
│   └── CalendarContext.jsx
├── App.jsx
├── main.jsx
├── index.css

public/
vite.config.js
package.json


Screenshots

![Screenshot 2025-05-27 123104](https://github.com/user-attachments/assets/465d1f44-eeca-46c2-b20b-7636d02d8665)

![Screenshot 2025-05-27 123759](https://github.com/user-attachments/assets/d9042535-6d69-4f79-a863-317d5ed78396)

![Screenshot 2025-05-27 124745](https://github.com/user-attachments/assets/f59a41f3-deb1-4d35-92ef-cc3a4208faf3)

![Screenshot 2025-05-27 124808](https://github.com/user-attachments/assets/5f58e863-2800-4482-abb9-ff9be22b6bbb)

![Screenshot 2025-05-27 124917](https://github.com/user-attachments/assets/f5a368e4-1f92-4ae9-9a68-e98f0f083136)

![Screenshot 2025-05-27 124934](https://github.com/user-attachments/assets/2a1bcdd3-704e-4cf5-a5c3-8d12475a35e8)



## Future Enhancements
•	Drag-and-drop events between dates
•	Google Calendar sync
•	Notifications and reminders
License
This project is open-source and free to use for educational or personal projects.

Built with care using React, Vite, and CSS.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> de16c7d (First commit)
