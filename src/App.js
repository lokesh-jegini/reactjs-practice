<<<<<<< HEAD
import React, { useState} from 'react';
import { Users } from './Users';
=======
import logo from './logo.svg';
>>>>>>> parent of eeea80b (basic-react-template)
import './App.css';
import Table from './Table';

function App() {
 
const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
<<<<<<< HEAD
      <input className="" type="text" placeholder="search...." onChange={(event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
        console.log(searchTerm  )
      }}/>
      <Table data={ Users} />
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> parent of eeea80b (basic-react-template)
    </div>
  );
}

export default App;