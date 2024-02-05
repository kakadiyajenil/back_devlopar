db.student.insertOne ({
    name: "jenil" ,
    age: 19,
    email: "jenil@123.in",
    gabbies: ["Sport",'dancing'],
    teacher: "girish"
});

db.student.insertMany([
    {
        name: "smith",
        age: 22,
        email: "sumit@234.in",
        subjects: ["<aths",'science'],
        teacher: "vivek"
    },
    {
        name: "krish",
        gender: 'male',
        email: "krish@523.in",
        teacher: "girish",
        subject:{
            maths: 50,
            sci: 25,
            eng: 40
        },
    },
    {
        name: "vijay",
        gender: "male",
        age: 22,
        techaer: "nikunj",
        subject:{
            maths: 40,
            sci: 30,
            eng: 40
        },
    },
    ]);
    
    db.teacher.find()
    
    db.teacher.insertMany([
        {
            name: "girish",
            course: "backend-Developent"
        },
        {
            name: "vivek",
            course: "Frontend-Development"
        },
        {
            name: "nikunj",
            course: "UI/UX design"
        },
        {
            name: "kuldeep",
            course: "Mobile-Development"
        },
        ])

db.teacher.find();    
    