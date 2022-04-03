import Navbar from './components/header';

function App() {
  const title = "I'm a dymanic title"

  return (
    <div className="App">
      <Navbar></Navbar>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
