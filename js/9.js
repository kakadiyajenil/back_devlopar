// Self-invoking Function
// (function()
// {
//     let x ="Hello Surat How Are You";
//     console.log(x);
// })();

//  Function Rest Parameters:-
// function s(...args) {
//     let s = 0 ;
//     for ( let arg of args) s += arg;
//     return s;
//     }
//     let x = s(1,2,3,4,5 );
//     console.log(x);


// argument Object
// x = s(1, 2, 3, 4, 5,5);
// function s() {
//     let s = 0;
//     for (let i = 0; i < arguments.length; i++)
// {
// s += arguments[i];
// }   
// return s;
// }
// console.log(x);

/////////////////////////////////////////////
// Generator Function
// function* hello(x,y){
//     yield x+y ;
//     yield x-y ;
//     yield x*y ;
//     return x/y;
// }
// let x = hello(15,5);

// console.log(x.next().value)
// console.log(x.next().value)
// console.log(x.next().value)
// console.log(x.next().value)
////////////////////////////////////////

// this keyword

// let cricketer = {
//     firstName: "Virat",
//     lastName: "Kohli",
//     nationality: "Indian",
//     fullName: function(){
//         return this.firstName + " " + this.lastName + "\n " + this.nationality;
//     }
// }
// console.log(cricketer.fullName());

///////////////////////////////////////////
// call Method
// let persone = {
//     fullName: function (nationality){
//         return this.firstName + " " + this.lastName + "\n " + nationality;
//     }
// }

// let cricketer = {
//     firstName: "Hardik",
//     lastName: "Pandya",
// };

// let Batsman = {
//     firstName: "MS",
//     lastName: "Dhoni",
// };

// console.log(persone.fullName.call(cricketer, "Indian\n" ) );
// console.log(persone.fullName.call(Batsman, "Indian" ) );

/////////////////////////////////////////////////////////////////////

// apply() Method:-

// let persone = {
//     fullName: function (nationality){
//         return this.firstName + " " + this.lastName + "\n " + nationality;
//     }
// }

// let cricketer = {
//     firstName: "Axar",
//     lastName: "Patel",
// };

// let Batsman = {
//     firstName: "KL",
//     lastName: "Rahul",
// };

// console.log(persone.fullName.call(cricketer, ["Indian\n"] ) );
// console.log(persone.fullName.call(Batsman, ["Indian"] ) );

///////////////////////////////////////////////

// bind Method
// let persone = {
//     firstName: "Jasprit",
    // lastName: "Bumrah",
    // fullName: function(city){
    //     return this.firstName + " " + this.lastName + "\n " + city;
    // },
    //     };

    //     let Batsman = {
    //             firstName: "Shubhman",
    //             lastName: "Gill",
    //         };

    //         console.log(persone.fullName("Ahemdabad"));
    //         let a = persone.fullName.bind(Batsman,"Panjab")();
    //         console.log(a);
