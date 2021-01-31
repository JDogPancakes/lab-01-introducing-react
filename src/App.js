import React, {useState} from 'react';
import Greeting from './component';
import './index.css';
function App() {
  const [name, setName] = useState();
  return (
    <body>
    <>
  <input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Hello traveler, what is your name?"
  />
  <Greeting name={name}/>
</>
</body>
  );
}

export default App;
