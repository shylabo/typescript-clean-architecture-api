CREATE DATABASE testdb; 

-- switch to db created
\c testdb

CREATE SCHEMA conceptual;

CREATE ROLE test WITH LOGIN PASSWORD 'postgres';

GRANT ALL PRIVILEGES ON SCHEMA conceptual TO test;
