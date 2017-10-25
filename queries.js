
## Table - People

-- 1. Create a table called Person that records a person's ID, Name, Age, Height ( in cm ), City, FavoriteColor. 
--     * ID should be an auto-incrementing id/primary key - Use type: INTEGER PRIMARY KEY AUTOINCREMENT

CREATE TABLE Person (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT,
  Age INTEGER,
  Height INTEGER,
  City TEXT,
  FavoriteColor TEXT  
); 

-- 2. Add 5 different people into the Person database. 
--     * Remember to not include the ID because it should auto-increment.

INSERT INTO Person 
(Name, Age, Height, City, FavoriteColor)
VALUES ('Johnny', 20, 184, 'Austin', 'blue'),
	     ('Eric', 24, 200, 'New York', 'green'), 
	     ('Spencer', 30, 174, 'Los Angeles', 'yellow'),
       ('Bryce', 40, 190, 'Tucson', 'green'),
       ('Kara', 17, 170, 'Waco', 'black');


-- 3. List all the people in the Person table by Height from tallest to shortest.
SELECT * FROM person
ORDER BY height DESC;

-- 4. List all the people in the Person table by Height from shortest to tallest.
SELECT * FROM person
ORDER BY height ASC;

-- 5. List all the people in the Person table by Age from oldest to youngest.
SELECT * FROM person
ORDER BY age DESC;

-- 6. List all the people in the Person table older than age 20.
SELECT * FROM person
WHERE age > 20;

-- 7. List all the people in the Person table that are exactly 18.
SELECT * FROM person
WHERE age = 18;

-- 8. List all the people in the Person table that are less than 20 and older than 30.
SELECT * FROM person
WHERE age < 20 OR age > 30;

-- 9. List all the people in the Person table that are not 27 (Use not equals).
SELECT * FROM person
WHERE age != 27;

-- 10. List all the people in the Person table where their favorite color is not red.
SELECT * FROM person
WHERE favoritecolor != 'red';

-- 11. List all the people in the Person table where their favorite color is not red and is not blue.
SELECT * FROM person
WHERE favoritecolor != 'red' AND favoritecolor != 'blue';

-- 12. List all the people in the Person table where their favorite color is orange or green.
SELECT * FROM person
WHERE favoritecolor = 'orange' OR favoritecolor = 'green';

-- 13. List all the people in the Person table where their favorite color is orange, green or blue (use IN).
SELECT * FROM person
WHERE favoritecolor IN ('orange', 'green', 'blue');

-- 14. List all the people in the Person table where their favorite color is yellow or purple (use IN).
SELECT * FROM person
WHERE favoritecolor IN ('yellow', 'purple');



## Table - Orders

### Instructions

-- 1. Create a table called Orders that records: PersonID, ProductName, ProductPrice, Quantity.

CREATE TABLE Orders (
	PersonID INTEGER PRIMARY KEY AUTOINCREMENT,
  	ProductName TEXT,
  	ProductPrice FLOAT,
  	Quantity INTEGER
);

-- 2. Add 5 Orders to the Orders table.
--     * Make orders for at least two different people.
--     * PersonID should be different for different people.

INSERT INTO orders 
(PersonID, ProductName, ProductPrice, Quantity)
VALUES (1, 'Kindle', 199.99, 1), 
	   (2, 'IPhone', 799.99, 2), 
       (1, 'Shoes', 54.90, 1), 
       (3, 'Coca Cola', 3.90, 5), 
       (5, 'Apple', 0.49, 2);

-- 3. Select all the records from the Orders table.
SELECT * FROM Orders;

-- 4. Calculate the total number of products ordered.
SELECT SUM(Quantity) FROM Orders;

-- 5. Calculate the total order price.
SELECT SUM(ProductPrice * Quantity) FROM Orders;

-- 6. Calculate the total order price by a single PersonID.
SELECT SUM(ProductPrice * Quantity) FROM Orders WHERE PersonID = 0;



## Table - Artist

### Instructions

-- 1. Add 3 new Artists to the Artist table. ( It's already created )

INSERT INTO Artist
(Name)
VALUES ('Artist1'), ('Artist2'), ('Artist3');

-- 2. Select 10 artists in reverse alphabetical order.

SELECT * FROM Artist
ORDER BY Name DESC
LIMIT 10;

-- 3. Select 5 artists in alphabetical order.

SELECT * FROM Artist
ORDER BY Name ASC
LIMIT 5;

-- 4. Select all artists that start with the word "Black".

SELECT * FROM Artist
WHERE Name LIKE 'Black%';

-- 5. Select all artists that contain the word "Black".

SELECT * FROM Artist
WHERE Name LIKE '%Black%';



## Table - Employee

### Instructions

-- 1. List all Employee first and last names only that live in Calgary.

SELECT firstname, lastname FROM employee
WHERE city = 'Calgary';

-- 2. Find the first and last name and birthdate for the youngest employee.

SELECT FirstName, LastName, Max(BirthDate) FROM Employee;

-- 3. Find the first and last name and birthdate for the oldest employee.

SELECT FirstName, LastName, Min(BirthDate) FROM Employee;

-- 4. Find everyone that reports to Nancy Edwards (Use the ReportsTo column).
--    * You will need to query the employee table to find the Id for Nancy Edwards

SELECT * from Employee
WHERE ReportsTo = (
	  SELECT EmployeeId FROM Employee
  	WHERE FirstName = 'Nancy' AND LastName = 'Edwards'
);

-- 5. Count how many people live in Lethbridge.

SELECT COUNT(*) FROM Employee WHERE City = "Lethbridge";



## Table - Invoice 

### Instructions

-- 1. Count how many orders were made from the USA.

SELECT count(*) FROM Invoice
WHERE BillingCountry = 'USA';

-- 2. Find the largest order total amount.

SELECT Max(total) FROM Invoice;

-- 3. Find the smallest order total amount.

SELECT Min(total) FROM Invoice;

-- 4. Find all orders bigger than $5.

SELECT * FROM Invoice
WHERE Total > 5;

-- 5. Count how many orders were smaller than $5.

SELECT count(*) FROM Invoice
WHERE Total < 5;

-- 6. Count how many orders were in CA, TX, or AZ (use IN).

SELECT count(*) FROM Invoice
WHERE BillingState IN ('Ca', 'Tx', 'AZ');

-- 7. Get the average total of the orders.

SELECT avg(Total) FROM Invoice;

-- 8. Get the total sum of the orders.

SELECT sum(Total) FROM Invoice;
