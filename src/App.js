import React, { useState} from 'react';
import { Users } from './Users';
import './App.css';
import Table from './Table';

function App() {
 
const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input className="" type="text" placeholder="search...." onChange={(event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
        console.log(searchTerm  )
      }}/>
      <Table data={ Users} />
    </div>
  );
}

export default App;