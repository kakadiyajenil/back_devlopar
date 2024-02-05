// use development
// show dbs
// show collections

// db.createCollecton("user");

db.student.insertOne({
    name: "josh",
    age: 20,
    email: "josh@test.on",
    hobbies: ["sport","Dancing"],
    address: {
        line1: '208, city-conter',
        line2: 'yogichok',
        city: 'surat',
        state: 'gujarat',
        country: 'india',
        pincode: 395010
    }
});

db.student.insertMany([
    {
        name: "jenil",
        age: 18,
        email: "jenil@test.com",
        subjects: ["Maths",'science'],
    },

    {
        name: "krish",
        gender: 'male',
        email: "krish@123.in",
        subject:{
            mathe: 50,
            sci: 40,
            eng: 30
        },
    },

    {
        name: "vijay",
        gender: 'male',
        age: 23,
        subject: {
            maths: 30,
            sci: 35,
            eng: 33
        },
    },
]);

// db. student.find()
// db.student.findOne({name: "jenil"})