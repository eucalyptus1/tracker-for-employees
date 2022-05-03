INSERT INTO department (name)
VALUES
 ('Accounting'),
 ('Waste Management'),
 ('Reaganomics'),
 ('Software'),
 ('Hydroponics')

INSERT INTO role (title, salary, department_id)
VALUES
 ('Transponster', '45000', 0),
 ('Frog Exaggerator', '20000', 1),
 ('Huggermugger', '6543263', 2),
 ('Spline Reticulator', '76832', 3),
 ('Chrysanthemum Negotiator', '67909', 4)


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Joey Jo-Jo ', 'Junior Shabadoo', 1, 1),
  ('John Jacob', 'Jingleheimer Schmidt', 1, NULL),
  ('Horatio', 'Hufnagel', 0, NULL),
  ('Zaphod', 'Beeblebrox', 1, NULL),
  ('Rudi', 'Van DiSarzio', 0, 2),
  ('Spider', 'Dijon', 1, NULL),
  ('Engelbert', 'Humperdink', 1, NULL),
  ('James', 'Van Der Beek', 1, 3),
  ('Hubert', 'Cumberdale', 0, 4),
  ('Marjorie', 'Stewart Baxter', 0, NULL),
  ('Jeremy', 'Fisher', 0, NULL)