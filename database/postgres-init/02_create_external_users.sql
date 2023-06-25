CREATE OR REPLACE VIEW external.users AS
SELECT
  id,
  name,
  email,
  created_at,
  updated_at
FROM
  conceptual.users;
