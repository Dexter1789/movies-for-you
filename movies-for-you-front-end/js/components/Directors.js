export default function Directors(directors) {
    return `
        <ul class="directors">
            ${directors.map(director => {
                return `
                    <li class="director">
                        <h3 class="director__directorName" id="${director.id}">${director.directorName}</h3>                     
                    </li>
                    `
            }).join('')}
        </ul>
        <section class="add__director">
            <input type="text" class="add__directorName" placeholder="Director Name">
            <button class="add__director__button">Add Director</button>
        </section>
            `
}