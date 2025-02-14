import { useState, useEffect } from "react";
import "./App.css";
import Logos from "./logos.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Logos />
      <Logos />
      <Logos />
      <h1>Vite + React</h1>
      <div className="card bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setLiked((status) => !status)}>
          {liked ? "Liked" : "Disliked"}
        </button>
        <button
          onClick={() => setDarkMode((prevMode) => !prevMode)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

