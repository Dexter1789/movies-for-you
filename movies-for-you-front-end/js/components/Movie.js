import Director from './Director'
import Cinematographer from './Cinematographer'

export default function Movie(movie) {
    return `
        <h2 class="movie__movieName">Movie: ${movie.movieName}</h2>
        <p class="movie__year">Year Released: ${movie.year}</p>
        <img src="${movie.imageURL}">
    `
}