\c testdb

CREATE TABLE  conceptual.users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

GRANT ALL PRIVILEGES ON conceptual.users TO test;

INSERT INTO conceptual.users
(name, email, password)
VALUES('test', 'test@gmail.com', 'password');
