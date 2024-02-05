-- create table SALESMAN_MASTER(
--     SalesmanNo varchar(6),
--     Name varchar(20),
--     Address1 varchar(30),
--     Address2 varchar(30),
--     City varchar(20),
--     Pincode int,
--     State varchar(20),
--     SalAmt int,
--     TgtToGet int,
--     YtdSales int,
--     Remarks varchar(60) 
-- );

-- insert into SALESMAN_MASTER(SalesmanNo,Name,Address1,Address2,City,Pincode,State,SalAmt,TgtToGet,YtdSales,Remarks) values
-- ("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharashtra",3000,100,50,"good"),
-- ("S00002","Omkar","65","Nariman","Mumbai",400001,"Maharashtra",3000,200,100,"good"),
-- ("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"good"),
-- ("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"good");



-- -- select * from SALESMAN_MASTER;

create table SALESMAN_MASTER(
    SalesmanNo varchar(6) primary key,
    Name varchar(20) not null,
    Address1 varchar(30) not null,
    Address2 varchar(30),
    City varchar(20),
    Pincode int,
    State varchar(20),
    SalAmt int not null,
    TgtToGet int not null,
    YtdSales int not null,
    Remarks varchar(60) 
);

insert into SALESMAN_MASTER(SalesmanNo,Name,Address1,Address2,City,Pincode,State,SalAmt,TgtToGet,YtdSales,Remarks) values
("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharashtra",3000,100,50,"good"),
("S00002","Omkar","65","Nariman","Mumbai",400001,"Maharashtra",3000,200,100,"good"),
("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"good"),
("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"good");



-- select * from SALESMAN_MASTER;


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
