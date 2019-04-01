import Movie from './Movie'

export default function Movies(movies) {
    return `
        <ul class="movies">
            ${movies.map(movie => {
                return `
                    <li class="movie">
                        <h3 class="movie__movieName" id="${movie.id}">${movie.movieName}</h3>                     
                    </li>
                    `
            }).join('')}
        </ul>
       `
}