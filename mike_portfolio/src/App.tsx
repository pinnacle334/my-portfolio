// import { ButtonDk } from "./components/ButtonDk";

function App() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  

  return (
    <div className="w-full h-screen stripe-bg">
      <button onClick={toggleDarkMode} className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App