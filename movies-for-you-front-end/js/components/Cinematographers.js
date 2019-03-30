export default function Cinematographers(cinematographers) {
    return `
        <ul class="cinematographers">
            ${cinematographers.map(cinematographer => {
                return `
                    <li class="cinematographer">
                        <h3 class="cinematographer__cinematographerName" id="${cinematographer.id}">${cinematographer.cinematographerName}</h3>                     
                    </li>
                    `
            }).join('')}
        `
}