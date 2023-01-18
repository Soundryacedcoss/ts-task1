import React from 'react';
import './App.css';
import { Marks } from './Marks';
import { Student } from './Student';

function App() {
  let marks=[55,20,45,79,30]
  let books=[
  {
    id:1,
    name:"Math"
  },
  {
    id:2,
    name:"Physics"
  },
  {
    id:1,
    name:"biology"
  },
  {
    id:1,
    name:"chemistery"
  },
  {
    id:1,
    name:"History"
  }

  ]
  return (
    <div className="App">
      <Student name = "Lucky" age={10} qualified={true} gender="female" />
      <Marks marks={marks} books={books}/>
    </div>
  );
}

export default App;
