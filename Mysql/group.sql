select * from employees;

select * from employees where jobTitle='sales Rep' and employeeNumber between 1200 and 1500;

select * from employees where officeCode >= 2 and jobTitle not in ('sales Rep');

select * from customers ;

select * from customers where country not in ('usa');

select * from customers where customerNumber  not between 150 and 200;

select * from employees;

select firstName,lastName as "name of the employees" from employees order by lastName;

select * from customers where creditLimit > 70000 order by contactLastName desc;

select * from customers where city = 'singapore' or city = 'liverpool' or city = 'NYC';

select * from customers where contactLastName like 'SMITH%';

select * from employees where officeCode in (1,3,5);

select * from customers where creditLimit between 50000 and 95000;

select * from employees where officeCode not in (1,3);

select * from customers where customerName like 's%';

select * from customers where contactLastName like 's%h';

select * from customers where contactLastName like 's____';

select * from customers where contactLastName like '________';

select * from customers where customerName like 'a%e';

select * from customers where contactLastName like '%ee%';

select jobTitle , count(*) from employees group by jobTitle;

select state, max(creditlimit) from customers group by state;