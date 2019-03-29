DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT NULL,
  stock_inventory INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Pizza", "Food", 2, 100);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Zip Ties", "Necessaties", 3, 60);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("White T-shirt", "Apparel", 8,  24);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("TV", "Electronics", 1500, 42);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Gold Necklace", "Apparel", 150, 5);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Apple Macbook Pro", "Electronics", 1499, 17);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("PS4", "Electronics", 300, 80);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Carrots", "Food", 3, 60);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Bleach", "Necessaties", 4, 32);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Rope", "Necessaties", 19, 40);

INSERT INTO products (product_name, department_name, price, stock_inventory)
VALUES ("Rubber Gloves", "Necessaties", 8,  200);

