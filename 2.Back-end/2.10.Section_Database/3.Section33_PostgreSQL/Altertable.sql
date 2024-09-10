ALTER TABLE visited_countries 
ADD UNIQUE (country_code,user_id);

UPDATE users
SET name = 'Angelina'
WHERE id = 1;

SELECT *
FROM users;


-- ORDER BY

SELECT * 
FROM users
ORDER BY name ASC; -- order by name 


SELECT * 
FROM users
ORDER BY id ASC; -- order by id


DELETE 
FROM visited_countries
WHERE user_id = 3;



SELECT *
FROM visited_countries;

DELETE 
FROM visited_countries
WHERE user_id = 1 AND country_code = 'ES';