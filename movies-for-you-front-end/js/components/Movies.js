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
        // </ul>
        // <section class="add__artist">
        //     <input type="text" class="add__artistName" placeholder="Artist Name">
        //     <input type="text" class="add__image" placeholder="Image URL">
        //     <button class="add__artist__button">Add Artist</button>
        // </section>
       `
}