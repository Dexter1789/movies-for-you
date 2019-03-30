import Movies from './Movies'
import Movie from './Movie'
export default function Cinematographer(cinematographer) {
    return `

        <h2 class="cinematographer__cinematographerName">Cinematographer: ${cinematographer.cinematographerName}</h2>

        <ul class="movies">
            <h3>Movies</h3>
            <li class="movie">${Movies(cinematographer.movies)}</li>
        </ul>

        // <section class="add__movie">
        //     <input type="text" class="add__movieName" placeholder="Movie Name">
        //     <input type="text" class="add__image" placeholder="Image URL">
        //     <input type="text" class="add__year" placeholder="Movie Release Year">
        //     <button class="add__movie__button">Add Movie</button>
        // </section>
    `
}