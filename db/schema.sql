INSERT INTO dept (name)
VALUES ('IT'),
    ('R&D'),
    ('Customer Support'),
    ('Human Resources');

SELECT * FROM DEPT;

INSERT INTO roles (title, salary, dept_id)
VALUES ('IT Manager', 105000, 1),
    ('Research Scientist', 180000, 2),
    ('Customer Support Specialist', 60000, 3),
    ('HR Manager', 95000, 4),
    ('Software Developer', 120000, 1),
    ('Customer Support Manager', 85000, 3),
    ('Data Analyst', 95000, 2),
    ('Recruiter', 80000, 4);

SELECT * FROM ROLES;

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ('Michael', 'Johnson', 1, NULL),
    ('Sarah', 'Williams', 3, 1),
    ('Christopher', 'Brown', 2, 1),
    ('Jessica', 'Jones', 7, 1),
    ('Matthew', 'Taylor', 8, 1),
    ('Amanda', 'Davis', 5, 1),
    ('Ryan', 'Moore', 6, 1),
    ('Olivia', 'Anderson', 4, 1);

SELECT * FROM employees;
