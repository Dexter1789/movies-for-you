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
        // <section class="add__movie">
        //     <input type="text" class="add__movieName" placeholder="Movie Name">
        //     <input type="text" class="add__image" placeholder="Image URL">
        //     <input type="text" class="add__year" placeholder="Movie Release Year">
        //     <button class="add__movie__button">Add Movie</button>
        // </section>
       `
}