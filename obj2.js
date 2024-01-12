const tinderuser = new Object();

tinderuser.id = "abx123";
tinderuser.email = "coolsuru2727@gmail.com";
tinderuser.phone = "12345678";

// console.log(tinderuser);

const tinderusername = {
  email: "sureshmistry3@gmail.com",
  name: {
    fname: "suresh",
    mname: "devaram",
    lname: "mistry",
    add: {
      street: "gokul darshan",
      pincode: "396230",
    },
  },
};

// console.log(tinderusername);
console.log(tinderusername.name.add.street);
