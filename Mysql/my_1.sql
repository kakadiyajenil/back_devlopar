-- \sql

-- \connect root@localhost:3306

-- create database user

-- show database;

-- use test;

-- show tables;

create table test(
    id int,
    firstname varchar(20),
    lastname varchar(30),
    gender varchar(20),
    emali varchar(20),
    mobileno int 
);

-- describe test;
-- desc user;

insert into test (id, firstname, lastname, gender, emali, mobileno)values(1, 'jenil', 'kakadiya','male','jenil@test.in',123456789);

-- insert inot user (id, firstname, lastname, gender, emali, mobileno) values(2, "krish", "ranghani","male","krish@test.in",123456789),
-- (3, 'vijay', "solki","male","vijay@test.in",123456789);

-- -- skip some column data
-- insert inot user (id, firstname, lastname, gender, emali, mobileno)values
-- (4, 'darshn', "chohan", "male", "darshn@test.in", 123456789);

-- insert inot user values
-- (5, 'bhautik', "dudhat", "male", "bhautik@tset.in",123456789);

-- select * from test;

-- select name, city from client_master;
-- select *, city from client_master;
-- select name as "Full Name" from client_master;
-- select name as "Full Name", city "District" from client_master;


-- -- Where clause
-- select * from client_master where city = 'mumbai';
-- select * from client_master where baldue < 5000;
-- select * from client_master where baldue >= 5000;
-- select * from client_master where baldue = 5000;



-- -- order by
-- select * from client_master order by city desc, baldue asc;
-- select * from client_master order by city desc;



-- -- update query
-- update client_master set baldue = 1000 // all record update
-- update client_master set baldue = 1000, city = 'Navi Mumbai' where baldue = 0;


-- -- delete query
-- delete from client_master;
-- delete from client_master where address1 = '66';



--  -- drop statement 
-- drop table client_master;
-- drop database node_8am;

