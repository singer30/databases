var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) { 
      // select id text roomname users
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username from messages left outer join users on (messages.userID = users.id) order by messages.id desc';
      db.query(queryStr, function(err, results) {
        //console.log('I am getting messages!');
        if (err) {
          callback(err);
        } else {
          callback(null, {results});
        }
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (parameters, callback) {
      var queryStr = 'insert into messages (text, userID, roomname) values (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, parameters, function(err, results) {
        //console.log('I am posting messages at the model!');
        if (err) {
          callback(err);
        } else {
          callback(null, {results});
        }
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        //console.log('I am getting users!');
        callback(err, {results});
      });
    },
    post: function (parameters, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, parameters, function(err, results) {
        //console.log('I am posting users!');
        if (err) {
          callback(err);
        } else {
          callback(null, {results});
        }
      });
    }
  }
};

