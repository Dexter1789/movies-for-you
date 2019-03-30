import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

import Movies from './components/Movies'
import Cinematographers from './components/Cinematographers'
import Directors from './components/Directors'

main()

function main() {
    //getAppContext().innerHTML = `<h1>Hellooooooo World</h1>`
    api.getRequest('http://localhost:8080/movies', movies => {
        getAppContext().innerHTML = Movies(movies)
    navMovies()
    navDirectors()
})

function navMovies() {
    const movieButton = document.querySelector('.nav__movies')
    events.on(movieButton, 'click', ()=> {
        api.getRequest('http://localhost:8080/movies', movies => {
            getAppContext().innerHTML = Movies(movies)
        })
    })
}

function navDirectors() {

}

function getAppContext() {
    return document.querySelector('#app')
    }
}
