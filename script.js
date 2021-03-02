"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
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
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genres = prompt("Введите ваш любимый жанр через запятую").toLowerCase();
      if (genres == "" || genres == null) {
        console.log("Вы ввели некоректные денные или не ввели вовсе");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item} `);
    });
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyBD: function () {
    if (typeof personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};
