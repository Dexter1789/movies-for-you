import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

import Movies from './components/Movies'
import Cinematographers from './components/Cinematographers'
import Directors from './components/Directors'
import Director from './components/Director'
import Movie from './components/Movie'
import Cinematographer from './components/Cinematographer'

main()

function main() {
    api.getRequest('http://localhost:8080/movies', movies => {
        getAppContext().innerHTML = Movies(movies)
    })
    navMovies()
    navDirectors()
    navCinematographers()
    viewSingleMovie()
    viewSingleDirector()
    viewSingleCinematographer()
    addDirector()
    addCinematographerToDirector()
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
            api.getRequest(`http://localhost:8080/movies/${event.target.id}`, movie => {
                getAppContext().innerHTML = Movie(movie)
                console.log(Movie)
                console.log(movie)
            })
        }
    })
}

function viewSingleDirector() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('director__directorName')) {
            api.getRequest(`http://localhost:8080/directors/${event.target.id}`, director => {
                getAppContext().innerHTML = Director(director)
                
            })
        }
    })
}

function viewSingleCinematographer() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('cinematographer__cinematographerName')) {
            api.getRequest(`http://localhost:8080/cinematographers/${event.target.id}`, cinematographer => {
                getAppContext().innerHTML = Cinematographer(cinematographer)
                console.log(cinematographer)
                console.log(Cinematographer)
            })
        }
    })
} 

function addDirector() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('add__director__button')) {
            const directorName = document.querySelector('.add__directorName').value
            api.postRequest('http://localhost:8080/directors/add/', {
                directorName : directorName
            }, (directors) => getAppContext().innerHTML = Directors(directors))
        }
    })
}

function addCinematographerToDirector() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('add__cinematographer__button')) {
            const cinematographerName = document.querySelector('.add__cinematographerName').value
            api.postRequest(`http://localhost:8080/cinematographers/add/${event.target.id}`, {
                cinematographerName : cinematographerName
            }, (director) => getAppContext().innerHTML = Director(director))
        }
    })
}

function getAppContext() {
    return document.querySelector('#app')
}

