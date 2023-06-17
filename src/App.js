import React, { useState} from 'react';
import { Users } from './Users';
import './App.css';

function App() {
 
const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input className="" type="text" placeholder="search...." onChange={(event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
        console.log(searchTerm  )
      }}/>
      <ul className="list">
        {
          Users.filter((user)=>{ return user.first_name.toLowerCase().includes(searchTerm)}).map((user) => { 
            return <li className="list-item" key={ user.id}>{ user.first_name}</li>
          })
        }
       
      </ul>
    </div>
  );
}

export default App;