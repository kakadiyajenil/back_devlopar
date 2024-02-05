create table customers(
customers_id int primary key,
first_name varchar (255),
last_name varchar(255),
email varchar(255),
password varchar(255)
);

insert into  customers(customers_id,first_name,last_name,email,password)values
(1,'krish','raghani',"krish@123",231415),
(2,'jenil','kakadiya',"jenil@23",231645),
(3,'vijey','solanki',"vijey@345",342232);


create table products(
product_id int primary key,
product_name varchar(255),
product_description varchar (255),
product_price decimal(10,2),
product_quantity int,
category varchar(255));

insert into products(product_id,product_name,product_desciption,product_price,product_quantity,category)values
(1,'t-shirts','cotan',1200,100,'usa'),
(2,'pen','red',10,1200,'usa'),
(3,'shirts','green',15,1000,'nagalend');

create table orders(
order_id int primary key,
customer_id int foreign key references customers(customer_id),
order_date date,
total_price decimal(10,2));

insert into orders(order_id,customer_id,order_date,total_price)values
(10,0001,10-2-2019,1000),
(15,0002,20-3-2017,3000),
(12,0003,19-6-2023,5000);


create table order_items(
order_item_id int primary key,
order_id int foreign key references orders(order_id),
product_id int foreign key references products(product_id),
price decimal(10,2));

insert into order_items(order_item_id,order_id,product_id,price)values
(0022,10,1,20000),
(0033,12,3,12000),
(0044,15,2,23000);

select * from customers;

select * from products;

select * from orders;

select * from order_items where items;

UPDATE products SET product_quantity = 50 WHERE product_id = 1;

select * from 

select * FROM products WHERE category = 'Category 1' ORDER BY product_price;

delete from order_id;
