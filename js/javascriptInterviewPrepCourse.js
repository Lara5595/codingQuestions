// 1. Write code to get an array of names from given array of users

const users = [
    {
        id: 1,
        name: "David",
        isActive: true,
    },

    {
        id: 2,
        name: "Lessly",
        isActive: true,
    },
    {
        id: 3,
        name: "Luca",
        isActive: "false",
    }
];

let names = [];
for (let i = 0; i < users.length; i++){
    names.push(users[i].name);
}
console.log(names)