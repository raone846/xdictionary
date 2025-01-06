import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);
   const [result, setResult] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchWord = input.trim().toLowerCase();

    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchWord
    );

    if(found) {
      setResult(found.meaning);
    } else{
      setResult("Word not found in the dictionary.");
    }

  };

  return (

    <div className="App">
      <h2>Dictionary App</h2>
      <form onSubmit={handleSearch}>
        <input 
          type='text'
          placeholder='Search for a word...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <label><strong>Definition:</strong> {result}</label>
    </div>
  );
}

export default App;
