import allMovies from './data';
import { useState, useEffect } from 'react';
import {
  Card,
  Box,
  Typography,
  ThemeProvider,
  TextField,
  ImageList,
} from '@mui/material';
import theme from './config/theme';

const App = () => {
  const [searchingText, setSearchingText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const moviesAfterFilter = allMovies.filter((oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchingText.toLowerCase());
    });
    setFilteredMovies(moviesAfterFilter);
  }, [searchingText]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: theme.palette.primary.main }}>
        <TextField
          variant='filled'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem',
            marginTop: '0',
            background: theme.palette.tertiary.main,
          }}
          type='text'
          placeholder='Search'
          onChange={(e) => setSearchingText(e.target.value)}
        />
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingBottom: '10rem',
            background: theme.palette.primary.main,
          }}
        >
          {filteredMovies.map((oneMovie) => {
            const { id, image, title, age, tags, description } = oneMovie;

            return (
              <Box
                key={id}
                sx={{
                  width: '50rem',
                  margin: '1rem',
                  padding: '1rem',
                  boxShadow: '0px 0px 10px #e50914',
                  color: theme.palette.tertiary.main,
                }}
              >
                <ImageList
                  sx={{
                    width: '20rem',
                  }}
                >
                  <img src={image} alt='' />
                </ImageList>
                <Typography variant='h5'>{title}</Typography>
                <Typography>{age}</Typography>
                <Typography>{tags}</Typography>
                <Typography variant='subtitle1'>{description}</Typography>
              </Box>
            );
          })}
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default App;
