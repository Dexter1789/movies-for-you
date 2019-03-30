export default function Cinematographer(cinematographer) {
    return `
        <ul class="cinematographer">
            ${cinematographer.map(cinematographer => {
                return `
                    <li class="cinematographer">
                        <h3 class="cinematographer__cinematographerName" id="${cinematographer.id}">${cinematographer.cinematographerName}</h3>                     
                    </li>
                    `
            }).join('')}
        `
}