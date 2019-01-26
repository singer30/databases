DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;
/* Describe your table here.*/
CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(140) NOT NULL,
  userID INT NOT NULL,
  roomID INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*