const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://www.bootstrapcdn.com/"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Def
