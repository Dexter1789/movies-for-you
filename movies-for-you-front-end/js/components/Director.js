import Movies from './Movies'
import Movie from './Movie'
export default function Director(director) {
    return `
        <h2 class="director__directorName">Director: ${director.directorName}</h2>

        <ul class="movies">
            <h3>Movies</h3>
            <li class="movie">${Movies(director.movies)}</li>
        </ul>

        // <section class="add__movie">
        //     <input type="text" class="add__movieName" placeholder="Movie Name">
        //     <input type="text" class="add__image" placeholder="Image URL">
        //     <input type="text" class="add__year" placeholder="Movie Release Year">
        //     <button class="add__movie__button">Add Movie</button>
        // </section>
    `
}