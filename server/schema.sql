CREATE DATABASE chat;

USE chat;
/* Describe your table here.*/
CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(140) NOT NULL,
  userID INT NOT NULL,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*