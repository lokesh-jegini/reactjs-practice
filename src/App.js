import { useEffect } from 'react';
import './App.css';

function App() {
  const handleClick = () => { 
    alert('clicked');
  }

  useEffect(() => {
    
    const propertyButton = document.getElementById('property-button');
    propertyButton.addEventListener('click', (k) => {
    console.log(k);
      // alert('property button clicked');
    });
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>handleClick</button>
      <button onClick={() => handleClick()}>anonymous callback</button>
      <button onClick={function loki() { handleClick(); }}>named callback</button>
      <p>event listener property</p>
      <button id="property-button">property</button>
    </div>
  );
}

export default App;