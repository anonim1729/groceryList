import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ["naren", "darshan", "sachin", "anirudh"];
    const i = Math.floor(Math.random() * 4);
    return names[i];
  }
  // const name = "Naren";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a> */}
        {/* <p>{name}</p> */}
      </header>

    </div>
  );
}

export default App;
