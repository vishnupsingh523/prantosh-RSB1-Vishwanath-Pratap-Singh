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
    
  ]
  return (
    <div className="App">

      <h1 className='heading'>Movies List</h1>
      
      <div className="Card">
          {images.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;
