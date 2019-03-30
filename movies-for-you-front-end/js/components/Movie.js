import director from './components/Directors'



export default function Artist(artist) {
    return `
    <div class="artist__container">
        <h3 class="artist__artistName title">Artist: ${artist.artistName}</h3>
        <img src="${artist.image}" class="artist__image">
 
        <ul class="albums">
            <h3>Albums</h3>
            <li class="album">${Albums(artist.albums)}</li>
        </ul>

        <ul class="genres">
            <h3>Genres</h3>
            <li class="genre">${Genres(artist.genres)}</li>
        </ul>

        <section class="add__album">
            <input type="text" class="add__albumTitle" placeholder="Album Title">
            <input type="text" class="add__image" placeholder="Image URL">
            <input type="text" class="add__label" placeholder="Record Label">
            <button class="add__album__button" id="${artist.id}">Add Album</button>
        </section>

        <section class="add__genre">
            <input type="text" class="add__genreName" placeholder="Genre">
            <button class="add__genre__button" id="${artist.id}">Submit</button>
        </section>
    </div>
            `
}  