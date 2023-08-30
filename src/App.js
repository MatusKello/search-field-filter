import allMovies from './data';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchingText, setSearchingText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const moviesAfterFilter = allMovies.filter((oneMovie) => {
      return oneMovie.title.includes(searchingText);
    });
    setFilteredMovies(moviesAfterFilter);
  }, [searchingText]);

  return (
    <div>
      <form action=''>
        <input
          type='text'
          placeholder='Search'
          onChange={(e) => setSearchingText(e.target.value)}
        />
      </form>
      <div>
        {filteredMovies.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;
          return (
            <div key={id}>
              <img src={image} alt='' />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
