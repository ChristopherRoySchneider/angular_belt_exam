var mongoose = require('mongoose')
var Author = mongoose.model('Author') // We are retrieving this Schema from our Models, named 'tenrec'
var Rating = mongoose.model('Rating')
module.exports = {
    find_all: function (req, res) {
        Author.find({}, function (err, author) {
            if (err) {
                console.log('something went wrong');
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('got all authors:', author);
                res.json({ message: "Success", data: author })
            }
        }).sort('+_id')
    },
    new: function (req, res) {
        // console.log(req)
        var newAuthor = new Author();
        newAuthor.name = req.body.name;
        
        newAuthor.save(function (err) {
            if (err) {
                console.log('error saving new user: ',err);
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('new author:', newAuthor);
                res.json({ message: "Success", data: newAuthor })
            }
            
        })
    },
    get_by_id: function (req, res) {
        Author.find({_id:req.params.authorid}, function (err, p_by_name) {
            if (err) {
                console.log('something went wrong');
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('got authors by name:', p_by_name);
                res.json({ message: "Success", data: p_by_name })
            }
        })
    },
    edit: function (req, res) {
        // console.log("POST DATA", req.body);
        Author.findOne({ _id: req.params.authorid }, function (err, author) {
            author.name = req.body.name;
            
          
            
            author.save(function (err) {
                if (err) {
                    console.log('Post Errors:', err.errors);
                    res.json({ message: "Error", error: err })
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a author!');
                    res.json({ message: "Success",  })
                }
            })
        })
    },


    remove: function (req, res) {
        Author.deleteOne({_id:req.params.authorid}, function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('!!!!!!!!!!!!!!!deleted author by id:',req.params.authorid );
                res.json({ message: "Success" })
            }
        })
    },
    


}