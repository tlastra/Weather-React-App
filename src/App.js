import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Search your City's Weather 🌤</h1>
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by Tiana Lastra and is {""}
          <a href="https://github.com/tlastra/Weather-React-App" rel="noopener">
            open-sourced on GitHub
          </a>
          {""} and {""}
          <a
            href="https://glistening-brigadeiros-c2b5d1.netlify.app/"
            rel="noopener"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
