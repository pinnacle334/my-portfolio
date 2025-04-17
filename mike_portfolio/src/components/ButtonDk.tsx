export const ButtonDk = () => {
  const toggleDarkMode = () => {
    console.log("clicked!!")
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDarkMode}>Turn darkmode
    </button>
  );
};
