INSERT INTO department (name)
VALUES
 ('Accounting'),
 ('Waste Management'),
 ('Reaganomics'),
 ('Software'),
 ('Hydroponics')

INSERT INTO role (title, salary, department_id)
VALUES
 ('Transponster', '45000', 1),
 ('Frog Exaggerator', '20000', 2),
 ('Huggermugger', '6543263', 3),
 ('Spline Reticulator', '76832', 4),
 ('Chrysanthemum Negotiator', '67909', 5)


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Joey Jo-Jo ', 'Junior Shabadoo', 1, 1),
  ('John Jacob', 'Jingleheimer Schmidt', 2, NULL),
  ('Horatio', 'Hufnagel', 3, 2),
  ('Zaphod', 'Beeblebrox', 4, NULL),
  ('Rudi', 'Van DiSarzio', 5, 3),
  ('Spider', 'Dijon', 6, NULL),
  ('Engelbert', 'Humperdink', 7, NULL),
  ('James', 'Van Der Beek', 8, 4),
  ('Hubert', 'Cumberdale', 9, 5)