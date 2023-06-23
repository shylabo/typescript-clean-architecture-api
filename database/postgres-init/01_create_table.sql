\c testdb

CREATE TABLE  conceptual.user (
  id VARCHAR(100),
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  PRIMARY KEY (id)
);

GRANT ALL PRIVILEGES ON conceptual.user TO test;

INSERT INTO conceptual.user VALUES('1', 'test', 'test@gmail.com', 'password');
