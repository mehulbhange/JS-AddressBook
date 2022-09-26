const prompt = require('prompt-sync')();

let nameRegex = RegExp("^[A-Z][Aa-zZ]{2,}$");
let addressRegex = RegExp("^[A-Za-z0-9,/]{4,}$");
let cityStateRegex = RegExp("^[A-Za-z]{4,}$");
let zipRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
let phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
let emailRegex = RegExp("[\\w+_-]+(?:\\.[\\w_-]+)*@(?:[\\w]+\\.){1,2}[a-zA-Z]{2,}");

class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}

let addressBookArray = new Array();

let getContact = () => {
    let firstName = prompt("Enter First Name ");
    if(!nameRegex.test(firstName))
        throw "Invalid first name";
    let lastName = prompt("Enter Last Name ");
    if(!nameRegex.test(lastName))
        throw "Invalid last name";
    let address = prompt("Enter Address ");
    if(!addressRegex.test(address))
        throw "Invalid Address!!";
    let city = prompt("Enter City ");
    if(!cityStateRegex.test(city))
        throw "Invalid City!!";
    let state = prompt("Enter State ");
    if(!cityStateRegex.test(state))
        throw "Invalid State!!"
    let zip = prompt("Enter Zip ");
    if(!zipRegex.test(zip))
        throw "Invalid Zip!!";
    let phoneNumber = prompt("Enter Phone Number ");
    if(!phoneNumberRegex.test(phoneNumber))
        throw "Invalid Phone number!!"
    let email = prompt("Enter Email ");
    if(!emailRegex.test(email))
        throw "Invalid Email!!";
    let contact = null;

    try {
        contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    } catch (error) {
        console.log(error);
        return;
    }
    return contact;
};

let addContact = (contact) => {
    addressBookArray.push(contact);
    console.log("Contact Added Successfully!!")
}

do {
    console.log("\n0.Exit \n1.Add Contact");
    choice = Number(prompt("Enter Your Choice "));
    switch (choice) {
        case 0: 
            return;
        case 1: 
            try{
                addContact(getContact());
            }catch(ex){
                console.log(ex);
            }
            break;
        default: 
            console.log("Invalid Choice !!");
    }

} while (choice != 2)