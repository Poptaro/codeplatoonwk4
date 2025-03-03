-- DROP TABLE IF EXISTS teachers, students;

-- CREATE TABLE teachers (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(25),
--   last_name VARCHAR(25),
--   age INT,
--   subject_name VARCHAR(25)
-- );

-- CREATE TABLE students (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(25),
--   last_name VARCHAR(25),
--   age INT,
--   grade CHAR(3),
--   teacher_id INT REFERENCES teachers(id)
-- );







-- \COPY teachers (first_name, last_name, age, subject_name) FROM '/Users/rokusho/Desktop/CodePlatoon/week4/posty/teachers.csv' DELIMITER ',' CSV HEADER;
-- \COPY students (first_name, last_name, age, grade, teacher_id) FROM '/Users/rokusho/Desktop/CodePlatoon/week4/posty/students.csv' DELIMITER ',' CSV HEADER;



-- SELECT * FROM students;
-- SELECT * FROM teachers;

-- INSERT INTO students (first_name, last_name, age, grade) VALUES ('Ashe', 'Freljord', 29, 'B');
-- SELECT * FROM students;

SELECT students.first_name AS student_name, teachers.first_name AS teacher_name FROM teachers JOIN students ON students.teacher_id = teachers.id
