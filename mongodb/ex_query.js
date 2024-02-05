use.ecommerce //1

db.createCollection("customers")
db.createCollection("products")
db.createCollection("orders")
db.createCollection("orde_items")

// insert costomers
db.customers.insertMany([
    {
    customer_id: "A001",
    first_name: "jenil",
    last_name: "kakadiya",
    email: "jenil@123.in",
    password: "jenil123"
},
{
    customer_id: "c004",
    first_name: "vijay",
    last_name: "solnki",
    email: "vijay@453.com",
    password: "vijay324"
},
{
    customer_id: "R003",
    first_name: "krish",
    last_name: "raghani",
    email: "krish@326.com",
    password: "krish078"
}
]);

// insert products
db.products.insertMany([
    {
        product_id: "002",
        product_name: "producet 23",
        product_description: "description 2",
        product_price: 10.00,
        product_quantity: 100,
        category: "category 22"
    },
    {
         product_id: "008",
        product_name: "producet 26",
        producet_description: "description 8",
        producet_price: 120.00,
        producet_quantity: 100,
        category: "category 30"
    },
    {
         product_id: "001",
        product_name: "producet 12",
        producet_description: "description 9",
        producet_price: 109.00,
        producet_quantity: 150,
        category: "category 42"
    }
    ]);
    
// insert orders
db.orders.insertMany([
    {
        order_id: "022",
        customer_id: "c004",
        order_date: "23-02-2023",
        total_price: 399.00
    },
    {
        order_id: "032",
        customer_id: "A001",
        order_date: "03-12-2023",
        total_price: 599.00
    },
    {
        order_id: "055",
        customer_id: "R003",
        order_date: "12-10-2023",
        total_price: 999.00
    }
    ]);
    
// insert order_items
db.order_items.insertMany([
    {
        order_item_id: "230",
        order_id: "055",
        producet_id: "001",
        quantity: 100,
        price: 199.00
    },
    {
         order_item_id: "303",
        order_id: "022",
        producet_id: "002",
        quantity: 120,
        price: 599.00
    },
    {
         order_item_id: "309",
        order_id: "032",
        producet_id: "008",
        quantity: 100,
        price: 649.00
    }
    ]);

//4    
db.customers.find({}) 

//5
db.products.find({}) 

//6
db.orders.find({}) 

//7
db.order_items.find({}) 

//8
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  {
    $lookup: {
      from: "products",
      localField: "order_id",
      foreignField: "order_id",
      as: "products"
    }
  }
])

// 9
db.products.updateOne(
  { product_id: "008" },
  { $set: { product_quantity: 100 } }
)

// 10
db.orders.aggregate([
  {
    $match: { email: "jenil@123.in" }
  }
])

// 11
db.products.aggregate([
  {
    $match: { category: "category 22" }
  },
  {
    $sort: { product_price: 10.00 }
  }
])

//12
db.orders.deleteOne({order_id:"032"})