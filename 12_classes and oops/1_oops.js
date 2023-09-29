const user = {
  username: "sejal",
  loginCount: "12",
  getUser: function () {
    console.log("hello there");
    console.log(`username ${this.username}`);
    console.log(this); // gives whole obejct here
  },
};
    // console.log(user.username);
    console.log(user["username"]);
    console.log(user.getUser());
    console.log(this); //{}


    // constructor function  -> (new keyword)
    // constructor function get call due to new keyword /
   function sayhello(username , count ){
    this.username = username
    this.count = count
    this.greetings = function (){
        console.log(`this is a username ${this.username}`)
    }
   
   }

   const userOne = new sayhello('chaiAurCode' , 12 )
   console.log(userOne)


   