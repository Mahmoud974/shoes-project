const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWJkNWRjYmE1NTAxZjBiNWFmNGNiYmI2MzhkNmE4ZCIsInN1YiI6IjYwNjA4ZjE0NmY2YTk5MDA2YWZhZTRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UiGshYFYwKXidENEhCDRrZzogOJHhXMgrj4sg07MF8w'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));