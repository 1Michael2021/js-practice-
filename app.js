const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};
/*
let a = prompt("Один из последних просмотренных фильмов?");
let b = prompt("на сколько оцените его?");
let c = prompt("Один из последних просмотренных фильмов?");
let d = prompt("на сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);
*/
for (let i = 0; i < 2; i++) {
   let a = prompt("Один из последних просмотренных фильмов?");
   let b = prompt("на сколько оцените его?");
   personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB.movies);
console.log(personalMovieDB.count);
