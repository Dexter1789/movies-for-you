import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

import movies from './components/Movies'

main()

function main() {
    //getAppContext().innerHTML = `<h1>Hellooooooo World</h1>`
    api.getRequest('http://localhost:8080/movies', movies => {
		getAppContext().innerHTML = Movies(movies)
})

function getAppContext() {
    return document.querySelector('#app')
}
}
