-- create table clint(
--     ClintNo varchar(6),
--     Cname varchar(20),
--     Address1 varchar(30),
--     Address2 varchar(30),
--     City varchar(15),
--     pincode int,
--     Cstate varchar(15),
--     baldue int
-- );

-- insert into clint(clintNo, Cname,Address1,Address2,City,pincode,Cstate,baldue)
-- values ('C001','ivan bayross','A/14','Worli','mumbai',40054,'maharahtra',15000),
--        ('C002','Mamta Muzumbar','B/20','Chennai','madras',780001,'tamil nadu',0),
--        ('C003','Chhaya Bankar','D/50','Nariman','Mumbai',400057,'Maharahtra',5000),
--        ('C004','Ashwini joshi','E/12','MS','Bangalore',560001,'karnataka',0),
--        ('C005','hansel Colaco','C/14','Bandra','Mumbai',400060,'Maharashtra',2000),
--        ('C006','Deepak Sharma','Z/10','Long street','Mangalore',560050,'karnataka',0);


create table client_master(
    CLIENTO Varchar (6) primary key,
    Name Varchar(20) not Null,
    ADDRESS1 Varchar(30),
    ADDRESS2 Varchar(30),
    city varchar (15),
    PINCODE int,
    cSTATE Varchar (15),
    BALDUE int
    );

    insert into 
    client_master(CLIENTO,Name,ADDRESS1,ADDRESS2,city,PINCODE,cSTATE,BALDUE)values 
("C00001",'Ivan Bayross',"A/13","Worli","Mumbai",400054,"Maharashtra",15000),
("C00002",'MamtaMuzumdar',"78","Nariman","Madras",780001,"TamilNadu",0),
("C00003",'Chhaya Bankar',"p-9","Bandra","Mumbai",400057,"Maharashtra",5000),
("C00004",'meetgosani',"AA35","juhu","Bangalore",560001,"Karnataka",0),
("C00005",'Ashwini Joshi',"A/11","Worli","Mumbai",400060,"Maharashtra",2000),
("C00006",'HanselColaco',"A/13","Worli","Bangalore",560050,"Karnataka",0);