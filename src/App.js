import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Search your City's Weather 🌤</h1>
        <Weather />
        <footer>
          This is my {""}
          <a href="https://github.com/tlastra/Weather-React-App" rel="noopener">
            GitHub
          </a>
          {""} site
        </footer>
      </div>
    </div>
  );
}

export default App;
