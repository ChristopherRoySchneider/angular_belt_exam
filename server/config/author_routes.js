var mongoose = require('mongoose')

var authors = require('../controllers/authors.js')
module.exports = function (app) {
    app.get('/authors', function (req, res) {
        authors.find_all(req, res);
    })
    app.get('/authors/:authorid', function (req, res) {
        authors.get_by_id(req, res);
    })
    app.post('/authors', function (req, res) {
        authors.new(req, res);
    })
    app.put('/authors/:authorid', function (req, res) {
        authors.edit(req, res);
    })

    app.delete('/authors/:authorid', function (req, res) {
        authors.remove(req, res);
    })

  

    

}