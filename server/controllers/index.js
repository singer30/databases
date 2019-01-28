

var models = require('../models');



module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('I am getting messages!');
      models.messages.get(function(err, results) {
        if (err) {}
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('REQ.JSON:  ', req.json);
      console.log('I am posting messages!');
      var parameters = [req.body.text, req.body.username, req.body.roomname];
      models.messages.post(parameters, function(err, results) {
        if (err) { 
          console.log('error in controller', err);
          throw err;
        } else {
          console.log('post controler was successful');
          res.status(201);
          res.end();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //console.log('I am getting users!');
      models.users.get(function(err, results) {
        if (err) {
          //console.log('error in controller', err);
        }
        res.json(results);
      });
    },


    post: function (req, res) {
      console.log('I am posting users!');
      console.log('req.body:  ', req.body);
      var parameters = req.body.username;
      models.users.post(parameters, function(err, results) {
        if (err) {}
        res.sendStatus(201);
      });
    }
  }
};

