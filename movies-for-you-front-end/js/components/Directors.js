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
            `
}