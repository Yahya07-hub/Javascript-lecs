// (this)) keywords gives us new empty object
// Ek constructer function call hota h (new)) keyword ke waja se
// this keyword me jitne bhi arguments likhe h wo usme inject hojate h
// 4th step me miljata h func me

// object literal
// const user = {
//     username: "Yahya",
//     password: "123456",
//     followers: 1300,
//     loginCount: 19,

//     getUserDetails: function(){
//         //console.log("Received user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

// Constructer func
function user(username, password, followers){

    this.username = username;
    this.password = password;
    this.followers = followers

    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }
    return this


}

const userOne = new user('Yahya', 123456, 1300)
const userTwo = new user('Araf', 1234, 951)
console.log(userOne.greeting());
console.log(userTwo.constructor);
console.log(userOne instanceof user)
// constructor hota h Refrence hoti h khud hi ke bare me


