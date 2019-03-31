import Cinematographers from './Cinematographers'

export default function Director(director) {
    return `
        <h2 class="director__directorName">Director: ${director.directorName}</h2>

        <ul class="cinematographers">
            <h3>Cinematographers:</h3>
            <li class="cinematographer">${Cinematographers(director.cinematographers)}</li>
        </ul>

        <section class="add__cinematographer">
            <input type="text" class="add__cinematographerName" placeholder="Cinematographer Name">
            <button class="add__cinematographer__button">Add Cinematographer</button>
        </section>
    `
}