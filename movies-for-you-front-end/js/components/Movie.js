import Director from './Director'
import Cinematographer from './Cinematographer'

export default function Movie(movie) {
    return `
        <h2 class="movie__movieName">Movie: ${movie.movieName}</h2>
        <p class="movie__year">Year Released: ${movie.year}</p>
        <image src="${movie.image}">
        <p class="movie__director">Director: ${movie.director}</p>
        <p class="movie__cinematographer">Cinematographer: ${movie.cinematographer}</p>
    `
}