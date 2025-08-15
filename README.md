# Summative Lab: React Coffee Shop

This project is a small React web application for a coffee shop, built using **Vite**, **React**, and **JSON Server**. It demonstrates routing, state management, form handling, and dynamic filtering/search functionality.

## Features

- **Home Page** with background video and shop info.  
- **Shop Page**:
  - Displays coffee cards with name, description, origin, and price.
  - **Search by name** and **filter by origin**.
- **Admin Portal**:
  - Add new coffee cards via a form.
  - Displays all existing coffees.
- **Custom Hook**: `useCoffeeData` for fetching and managing coffee data.  
- **Routing**: `react-router-dom` handles navigation between Home, Shop, and Admin Portal.

---

##  Getting Started

1. Clone the repository

git clone https://github.com/your-username/summative-lab-react.git
cd summative-lab-react/front-end

2. Install dependencies
npm install

3. Start JSON Server
npx json-server --watch ../db.json --port 5001

4. Start React app
npm run dev