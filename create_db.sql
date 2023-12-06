# Create database script for Thought Exchange

# Create the database
CREATE DATABASE myForum;
USE myForum;

# Create the tables

DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `post_title` varchar(20) NOT NULL,
  `post_content` text NOT NULL,
  `post_userid` int NOT NULL,
  `post_topicid` int NOT NULL,
  PRIMARY KEY (`post_id`),
  UNIQUE KEY `post_id_UNIQUE` (`post_id`),
  UNIQUE KEY `post_title_UNIQUE` (`post_title`),
  KEY `FK_Username_idx` (`post_userid`),
  KEY `FK_post_topicid_idx` (`post_topicid`),
  CONSTRAINT `FK_post_topicid` FOREIGN KEY (`post_topicid`) REFERENCES `topic` (`topic_id`),
  CONSTRAINT `FK_post_userid` FOREIGN KEY (`post_userid`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply` (
  `reply_id` int NOT NULL AUTO_INCREMENT,
  `reply_content` text NOT NULL,
  `reply_author` int NOT NULL,
  `reply_originalpost` int NOT NULL,
  PRIMARY KEY (`reply_id`),
  UNIQUE KEY `reply_id_UNIQUE` (`reply_id`),
  KEY `FK_reply_userid_idx` (`reply_author`),
  KEY `FK_reply_postid_idx` (`reply_originalpost`),
  CONSTRAINT `FK_reply_postid` FOREIGN KEY (`reply_originalpost`) REFERENCES `post` (`post_id`),
  CONSTRAINT `FK_reply_userid` FOREIGN KEY (`reply_author`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic` (
  `topic_id` int NOT NULL AUTO_INCREMENT,
  `topic_name` varchar(20) NOT NULL,
  PRIMARY KEY (`topic_id`),
  UNIQUE KEY `topic_id_UNIQUE` (`topic_id`),
  UNIQUE KEY `topic_name_UNIQUE` (`topic_name`),
  CONSTRAINT `topic_author` FOREIGN KEY (`topic_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `topic_privileges` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `FK_user_topicid_idx` (`topic_privileges`),
  CONSTRAINT `FK_user_topicid` FOREIGN KEY (`topic_privileges`) REFERENCES `topic` (`topic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# Create the app user and give it access to the database
CREATE USER 'forumuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'forum2027';
GRANT ALL PRIVILEGES ON myForum.* TO 'forumuser'@'localhost';
