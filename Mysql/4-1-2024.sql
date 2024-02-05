use classicmodels;

select * from customers;

select * from customers limit 30;

select * from customers where country = 'usa' and city = 'nyc' and customerNumber > 400;

select * from customers where country = 'usa' or customerNumber > 400;

select * from customers where country = 'usa' or country = 'germany' or country = 'italy';

select * from customers where country not in ('usa' , 'germany' , 'france');

select * from customers where customerNumber >= 200 and customerNumber <=350;

select * from customers where customerNumber not between 200 and 350;

select * from customers where customerName like 'mini%' ;
select * from customers where customerName like '%co' ;
select * from customers where customerName like '%model%' ;
select * from customers where customerName like 'mini%co.' ;
select * from customers where customerName like '__o%' ;
select * from customers where customerName like '%o_' ;
select * from customers where customerName like '_o____' ;