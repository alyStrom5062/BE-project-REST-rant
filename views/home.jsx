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
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk">Unsplash</a>
                    </div>
                </div>
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
