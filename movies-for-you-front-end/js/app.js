import api from './utils/api/api-actions'

main()

function main() {
        getAppContext().innerHTML = `<h1>Hellooooooo World</h1>`
}

function getAppContext() {
    return document.querySelector('#app')
    console.log("js working")
}

//document.querySelector('#app').innnerHTML = `<h1>Hello World</h1>`
