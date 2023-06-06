const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="http://placekitten.com/g/200/300" alt="Image of a cute little kitten"/>
                <div>Image Credit: <a href="placekitten.com">Place Kitten</a></div>
            </main>
        </Def>
    )
}

module.exports = error404