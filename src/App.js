import "./App.css";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img /> // Create a logo */}
        <h1>Watchlist Tracker</h1>
      </header>
      <div className="cards-list"></div>
      <h1>Shows/Movie Toggle goes here</h1>
      <CardList />
    </div>
  );
}

export default App;
