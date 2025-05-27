<<<<<<< HEAD
React Event Calendar (Flam Frontend Task 3
This project is a simple yet powerful event calendar built using React and Vite. It allows users to schedule events with start and end dates and times, choose custom colors, and search, edit, or delete them. All events are stored locally using `localStorage`, ensuring persistence even after a page refresh.

Features
Add events with:
•	Title
•	Start and end date
•	Start and end time with AM/PM format
•	Custom event colour

Recurrence options (Daily, Weekly, Monthly)
Search events by Title
Edit and delete existing events
Events are saved using browser localStorage.
Modern, clean UI with smooth interactions.

Technologies Used
•	React (Functional components + Hooks)
•	Vite (Development and build tool)
•	Context API (for global state)
•	date-fns (for date formatting and manipulation)
•	CSS (custom styling, fully responsive)

Prerequisites
- Node.js and npm installed on your system

Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Pardhavi-08/Flam-Frontend-Task3-event-calender.git
   cd Flam-Frontend-Task3-event-calender
Install dependencies: npm install
Start the development server: npm run dev
Open your browser and navigate to: http://localhost:5173

Project Structure
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

![Screenshot 2025-05-26 152525](https://github.com/user-attachments/assets/87d99b1b-a63c-4c65-b10f-2c3c23d46f47)

![Screenshot 2025-05-26 152540](https://github.com/user-attachments/assets/8a34fb9c-68a4-4dfc-a36e-0044b899643e)

![Screenshot 2025-05-26 153807](https://github.com/user-attachments/assets/9c5b5427-f9ee-4a3f-a089-82ab15ebb9dc)

![Screenshot 2025-05-26 152730](https://github.com/user-attachments/assets/40e92012-023d-414c-9a6c-0d7c779ad98d)

![Screenshot 2025-05-26 153818](https://github.com/user-attachments/assets/5bc4ed68-da95-42b0-87a5-43b705bf4f1c)

![Screenshot 2025-05-26 153828](https://github.com/user-attachments/assets/59010423-0494-4cdc-a1ce-2c72fc0820cb)

![Screenshot 2025-05-26 153841](https://github.com/user-attachments/assets/f5a642a0-2151-4017-8440-4d9c03e348b4)



Future Enhancements
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
