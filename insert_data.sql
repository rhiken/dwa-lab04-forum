USE myforum;

INSERT INTO `user` (`username`, `topic_privileges`) VALUES
('Amy', 1),
('Benedict', 2),
('Charlie', 3),
('Danny', 1),
('Edward', 2);

INSERT INTO `topic` (`name`) VALUES
('DIY'),
('Film'),
('Gardening'),
('Sport'),
('TV');

INSERT INTO `post` (`title`, `content`, `userid`, `topicid`, `date`, `username`) VALUES
('Replacing drill', 'Any recommendations?', 1, 1, '2023-01-01', 'Amy'),

