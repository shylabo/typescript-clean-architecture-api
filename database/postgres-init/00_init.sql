\c testdb

CREATE SCHEMA conceptual;
CREATE SCHEMA external;

CREATE ROLE test WITH LOGIN PASSWORD 'postgres';

GRANT ALL PRIVILEGES ON SCHEMA conceptual TO test;
