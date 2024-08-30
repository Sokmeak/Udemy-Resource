create database webdev;
use webdev;

CREATE TABLE products(
	id INT not null,
    name varchar(255),
    price INT,
    PRIMARY KEY (id)
);

show tables;

describe products;


INSERT INTO products 
values(1,"Pen",1); 
INSERT INTO products 
values(2,"Pencil",2);

INSERT INTO products 
values(3,"Correction Pen",1);  

SELECT* from products;


Update products
set price = 33
WHERE ID = 1;
ALTER TABLE products
ADD stock INT;

Update products
set stock = 32
WHERE ID = 1;

Update products
set stock = 100
WHERE ID = 2;

Update products
set stock = 90
WHERE ID = 3;

SELECT * FROM products;

DELETE FROM products
where id = 2;
CREATE table customers(
	id int not null,
    name varchar(255),
    age int,
    primary key(id)
    );
    
    INSERT INTO customers
    values (1,"Hansan",23),(2,"Petter",25);
    
CREATE TABLE orders (
	id INT NOT NULL,
    order_number varchar(255),
    product_id INT,
    customer_id INT,
    PRIMARY KEY (id),
    foreign key (customer_id) references customers(id),
    foreign key(product_id) references products(id)
    
    
);
SELECT * FROM products;
SELECT * FROM customers;
SELECT * FROM ORDERS;

SHOW TABLES;

INSERT INTO ORDERS
VALUES (1,"3434",1,1);
-- orders joins with customers 
SELECT orders.id,customers.name, orders.order_number 
FROM Orders INNER JOIN Customers
 ON Orders.customer_id=Customers.id;
 
 -- orders joins with products
 

SELECT orders.id,products.name, orders.order_number 
FROM Orders INNER JOIN products
 ON Orders.product_id=products.id;
 




