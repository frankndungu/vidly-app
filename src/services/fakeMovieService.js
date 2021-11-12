import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "The Social Network",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mockumentary/Reality" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "The Brothers Grimsby",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action/Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Anchorman 1",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Anchorman 2 - The Legend Continues",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "The Internship",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Percy Jackson - The Lightning Thief",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Mythical/Action" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Imitation Game",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
