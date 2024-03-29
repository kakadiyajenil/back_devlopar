create table sales_orders_details(
   OrderNo varchar(6),
   foreign key(OrderNo) references sales_order(OrderNo),
   ProductNo varchar(6),
   foreign key(ProductNo) references product_master(ProductNo),
   Qtyordered int,
   Qtydisp int,
   Productrate int
);

insert into sales_orders_details(OrderNo,ProductNo,Qtyordered,Qtydisp,Productrate)values
("O19001","P00001",4,4,525),
("O19001","P07965",2,1,8400),
("O19001","P07885",2,1,5250),
("O19002","P00001",10,0,525),
("O46865","P07868",3,3,3150),
("O46865","P07885",3,1,5250),
("O46865","P00001",10,10,525),
("O46865","P0345",4,4,1050),
("O19003","P0345",2,2,1050),
("O19003","P06734",1,1,12000),
("O46866","P07965",1,0,8400),
("O46866","P07975",1,0,1050),
("O19008","P00001",10,5,525),
("O19008","P07975",5,3,1050);

-- select * from sales_orders_details;
-- delete from sales_orders_details;
-- drop table sales_orders_details;
