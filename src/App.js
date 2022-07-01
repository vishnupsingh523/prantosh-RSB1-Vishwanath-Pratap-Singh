import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const images = [
    {
      location: './images/image1.jpg',
      name: 'The Avengers : Infinity War',
    },
    {
      location: './images/image2.jpg',
      name: 'The Avengers',
    },
    {
      location: './images/image3.jpg',
      name: 'Iron Man 3',
    },
    {
      location: './images/image4.jpg',
      name: 'The Jurassic World',
    },
    {
      location: './images/loveAndThunder.jpg',
      name: 'Thor Love And Thunder',
    },
    {
      location: './images/BlackWidow.jpeg',
      name: 'Black Widow',
    },
    {
      location: './images/image4.jpg',
      name: 'The Jurassic World',
    },
    {
      location: './images/loveAndThunder.jpg',
      name: 'Thor Love And Thunder',
    },
    {
      location: './images/BlackWidow.jpeg',
      name: 'Black Widow',
    },
  ]

  const [state, setState] = useState(images);

  const clearData = () => {
    setState([]);
  }
  const addMovie = () => {
    const data = {
      location: './images/BlackWidow.jpeg',
      name:'Black Panther',
    }
    setState([...state, data ])
  }
  return (
    <div className="App">

      <h1 className='heading'>Movies List</h1>
      {/* <input type="text" placeholder='Movie Name' />
      <input type="text" placeholder='Movie Location'/> */}
      <button onClick={addMovie}>Add Movie</button>
      <button onClick={clearData}>Clear All Movies</button>

      <div className="Card">
        {
          state.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
