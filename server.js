const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    // custom routing by id
    server.get('/p/:id', (req, res) => {
        const actualPage = '/blogpost'
        const queryParams = { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    // catch-all route
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Server listening on localhost:3000')
    })
})
.catch((exception) => {
    console.error(exception.stack)
    process.exit(1)
})