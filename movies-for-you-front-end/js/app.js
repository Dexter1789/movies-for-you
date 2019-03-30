import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

import Movies from './components/Movies'
import Cinematographers from './components/Cinematographers'
import Directors from './components/Directors'
import Director from './components/Director'
import Movie from './components/Movie'

main()

function main() {
    api.getRequest('http://localhost:8080/movies', movies => {
        getAppContext().innerHTML = Movies(movies)
    })
    navMovies()
    navDirectors()
    navCinematographers()
    viewSingleMovie()
}

function navMovies() {
    const movieButton = document.querySelector('.nav__movies')
    events.on(movieButton, 'click', ()=> {
        api.getRequest('http://localhost:8080/movies', movies => {
            getAppContext().innerHTML = Movies(movies)
        })
    })
}

function navDirectors() {
    const directorButton = document.querySelector('.nav__directors')
    events.on(directorButton, 'click', ()=> {
        api.getRequest('http://localhost:8080/directors', directors => {
            getAppContext().innerHTML = Directors(directors)
        })
    })
}

function navCinematographers() {
    const cinematographerButton = document.querySelector('.nav__cinematographers')
    events.on(cinematographerButton, 'click', ()=> {
        api.getRequest('http://localhost:8080/cinematographers', cinematographers => {
            getAppContext().innerHTML = Cinematographers(cinematographers)
        })
    })
}

function viewSingleMovie() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('movie__movieName')) {
            api.getRequest(`http://localhost:8080/movies/${event.target.id}`, artist => {
                getAppContext().innerHTML = Movie(movie)
            })
        }
    })
}

function getAppContext() {
    return document.querySelector('#app')
}
