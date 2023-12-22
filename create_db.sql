# Create database script for Thought Exchange

# Create the database
CREATE DATABASE IF NOT EXISTS myforum;
USE myforum;

# Create the tables

CREATE TABLE user (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `topic_privileges` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `FK_user_topicid_idx` (`topic_privileges`)
);

CREATE TABLE topic (
  `topic_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`topic_id`),
  UNIQUE KEY `topic_id_UNIQUE` (`topic_id`),
  UNIQUE KEY `topic_name_UNIQUE` (`name`)
);

CREATE TABLE post (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `content` text,
  `userid` int DEFAULT NULL,
  `topicid` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  UNIQUE KEY `post_id_UNIQUE` (`post_id`),
  UNIQUE KEY `post_title_UNIQUE` (`title`),
  KEY `FK_post_topicid_idx` (`topicid`),
  KEY `FK_post_username_idx` (`username`)
);

CREATE TABLE reply (
  `reply_id` int NOT NULL AUTO_INCREMENT,
  `reply_content` text,
  `reply_author` int DEFAULT NULL,
  `reply_originalpost` int DEFAULT NULL,
  PRIMARY KEY (`reply_id`),
  UNIQUE KEY `reply_id_UNIQUE` (`reply_id`),
  KEY `FK_reply_userid_idx` (`reply_author`),
  KEY `FK_reply_postid_idx` (`reply_originalpost`)
);

# Create the app user and give it access to the database
CREATE USER 'forumuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'forum2027';
GRANT ALL PRIVILEGES ON myforum.* TO 'forumuser'@'localhost';

