let numberOfFilms;

function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

/* start(); */

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классный зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else if (personalMovieDB.count == null || personalMovieDB.count == "") {
    alert("]вы не ввели количество фильмов");
  } else {
    alert("прозошла ошибка");
  }
}
/* detectPersonalLevel(); */

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?");
    let b = prompt("На сколько оцените его?");
    personalMovieDB.movies[a] = b;
    true;
    if (
      a != null &&
      b != null &&
      a != "" &&
      b != "" &&
      a != a.length > 50 &&
      b != b.length > 50
    ) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

/* rememberMyFilms(); */

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
/* showMyDB(personalMovieDB.privat); */

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
console.log(personalMovieDB);
