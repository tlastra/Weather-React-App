import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Search your City's Weather 🌤</h1>
          <Weather />
        </header>
      </div>
    </div>
  );
}

export default App;
