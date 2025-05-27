# React Event Calendar (Flam Frontend Task 3)

A simple yet powerful event calendar built using **React** and **Vite**. It allows users to schedule events with custom dates, times, and colors. Events are stored in `localStorage`, so they persist even after a page refresh.


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

- **React** – For building the user interface using functional components and hooks.

- **Vite** – Lightning-fast build tool and development server.

- **JavaScript (ES6+)** – Core programming language for React and logic.

- **CSS** – Custom styling with responsiveness.

---

## Libraries & Packages
- **Context API** – React’s built-in state management for sharing state across components.

- **date-fns** – Lightweight utility library for manipulating and formatting dates.

- **UUID** – To generate unique identifiers for each event.

---
## Development Tools

- **Git & GitHub** – Version control and remote repository.

- **Visual Studio Code** – Code editor.

- **npm** – Node.js package manager for installing dependencies.

- **localStorage** – For storing events persistently in the browser.


---

## Prerequisites

- Node.js and npm installed on your system

---
## Installation

**Clone the repository:**
```
git clone https://github.com/Pardhavi-08/Flam-Frontend-Task3-event-calendar.git
cd Flam-Frontend-Task3-event-calendar
```
**Install dependencies:**
Ensure you are in the correct directory.
```
npm install
```
**Start the development server:**
```
npm run dev
```

## Project Structure

 src  
├──  components  
│   ├── Calendar.jsx  
│   ├── DayCell.jsx  
│   └── EventModal.jsx  
├──  context  
│   └── CalendarContext.jsx  
├── App.jsx  
├── main.jsx  
├── index.css  

public  
vite.config.js  
package.json  


---
## Screenshots

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



