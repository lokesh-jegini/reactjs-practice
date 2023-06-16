
import './App.css';

function App() {
  const handleClick = () => { 
    alert('clicked');
  }
  return (
    <div className="App">
        <button onClick={handleClick}>handleClick</button>
      {/* <button onClick={handleClick()}>handleClick()</button> */}
      <button onClick={() => {
        handleClick();
      }}>ananymous callback</button>
        <button onClick={function loki() {
        handleClick();
      }}>named callback</button>
    </div>
    
  );
}

export default App;
