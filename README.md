# TastyHub – Food Ordering App (React.js)

A simple, beginner-friendly food ordering front-end built with **React.js only**.
No backend, no database, no authentication, no APIs, no Firebase, no localStorage —
all cart data lives in React state and resets on page refresh.

## Tech Stack
- React.js (functional components + hooks)
- React Router v6
- Plain CSS (dark theme, orange accent)
- Vite (fast dev server / build tool)

## Project Structure
```
food-ordering-app/
├── public/
│   └── images/          # SVG food images + logo + hero art
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── FoodCard.jsx / FoodCard.css
│   │   └── CartItem.jsx / CartItem.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── Menu.jsx / Menu.css
│   │   ├── Cart.jsx / Cart.css
│   │   └── About.jsx / About.css
│   ├── data/
│   │   └── foods.js     # all 12 food items live here
│   ├── App.jsx / App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## How to Run

1. Open a terminal inside the `food-ordering-app` folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:
```
npm run build
```

## Notes for Learning
- Cart state (`cartItems`) is managed with `useState` inside `App.jsx` and passed
  down to pages/components as **props** — this is the "lifting state up" pattern.
- Food data is stored as a plain JS array in `src/data/foods.js`, simulating
  what a database table might look like.
- Images are simple SVG placeholders generated to match the dark/orange theme —
  swap them out for real photos in `public/images/` any time (keep the same
  file names, or update the paths in `foods.js`).
- Every file has comments explaining what each section does — read through
  `App.jsx` first, since that's where the core cart logic lives.

Enjoy building on top of this as a portfolio project! 🍔
