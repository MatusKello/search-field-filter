import allMovies from './data';
import { useState, useEffect } from 'react';
import { Card, Box, Typography, ThemeProvider, TextField } from '@mui/material';
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
      <Box
        sx={{
          background: theme.palette.primary.main,
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <TextField
            sx={{
              background: theme.palette.tertiary.main,
              '& input::placeholder': {
                textAlign: 'center',
              },
            }}
            variant='standard'
            type='text'
            placeholder='Search'
            onChange={(e) => setSearchingText(e.target.value)}
            size='small'
          />
        </Box>

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
                <Box
                  sx={{
                    width: '100%',
                    border: '1px solid red',
                  }}
                >
                  <img src={image} alt='' style={{ objectFit: 'cover' }} />
                </Box>
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
