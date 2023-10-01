// getter and setter are by default used in class
class User{
    constructor(email , password){
        this.email = email
        this.password = password
    }


    get password(){ //get use to send to user
        return `${this._password}abc`
    }
    set password(value){ //set use to store in db 
        this._password = value.toUpperCase( )
    }

    get email(){
        return this._email.toUpperCase()

    }
    set email(value){
        this._email = value // setters can be returned 
    }
}
const userhere = new User('email.com' , 'cde')//
console.log(userhere.password) //CDEabc
console.log(userhere)//User { _email: 'email.com', _password: 'CDE' }


/* 
get is used to send to user
set is used to store in db 
setter can be returned we not use here return keyword as it is settng the value 
getter are used to return something we havr to return to show to user
*/