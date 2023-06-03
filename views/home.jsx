const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="./css/style.css"/>
            </head>
            <body>
                <main>
                <h1>HOME</h1>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
                </main>
            </body>
            </html>
        </Def>
    )
}

module.exports = home
