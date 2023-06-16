import { useEffect } from 'react';
import './App.css';

function App() {
  const handleClick = () => { 
    alert('clicked');
  }

  useEffect(() => {
    // const propertyButton1 = document.querySelector('button');
    // console.log(propertyButton1);
    // propertyButton.addEventListener('click', () => {
    //   debugger;
    //   alert('property button clicked');
    // });
    const propertyButton = document.querySelector('#property-button');
    // propertyButton.onClick = () => { 
    //   alert('property button clicked');
    // }
    console.log(propertyButton);
    propertyButton.addEventListener('click', () => {
    
      alert('property button clicked');
    });
    propertyButton.addEventListener('mouseover', () => {
     
      alert('property button clicked');
    });


    return () => {
      propertyButton.removeEventListener('click', () => {
        debugger;
        alert('property button clicked');
      });
    };
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