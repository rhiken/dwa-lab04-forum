# Create database script for Thought Exchange

# Create the database
CREATE DATABASE myForum;
USE myForum;

# Create the tables
CREATE TABLE users (user_id INT AUTO_INCREMENT,user_name VARCHAR(20),PRIMARY KEY(user_id));

# Create the app user and give it access to the database
CREATE USER 'forumuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'forum2027';
GRANT ALL PRIVILEGES ON myForum.* TO 'forumuser'@'localhost';
