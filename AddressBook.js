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

let editContact = () => {
    let frstName = prompt("Enter First Name : ");
    let lstName = prompt("Enter Lastt Name : ");
    let index = addressBookArray.findIndex(contact => contact.firstName == frstName && contact.lastName == lstName);
    if (index == -1)
        console.log("Could not find the contact!!")
    else {
        //addressBookArray[index] = getContact();
        console.log("\n1.First Name \n2.Last name \n3.Address \n4.City \n5.State \n6.Zip \n7.Phone Number \n8.Email \n");
        let ch = Number(prompt("What you want to edit ?"));
        switch(ch){
            case 0:
                console.log("Done!!!");
                break;
            case 1:
                let firstName = prompt("Enter First Name ");
                if(!nameRegex.test(firstName))
                    throw "Invalid first name";
                addressBookArray[index].firstName = firstName;
                break;
            case 2:
                let lastName = prompt("Enter Last Name ");
                if(!nameRegex.test(lastName))
                    throw "Invalid last name";
                addressBookArray[index].lastName = lastName;
                break;
            case 3:
                let address = prompt("Enter Address ");
                if(!addressRegex.test(address))
                    throw "Invalid Address!!";
                addressBookArray[index].address = address;
                break;
            case 4:
                let city = prompt("Enter City ");
                if(!cityStateRegex.test(city))
                    throw "Invalid City!!";
                addressBookArray[index].city = city;                    
                break;
            case 5:
                let state = prompt("Enter State ");
                if(!cityStateRegex.test(state))
                    throw "Invalid State!!"
                addressBookArray[index].state = state;     
                break;
            case 6:
                let zip = prompt("Enter Zip ");
                if(!zipRegex.test(zip))
                    throw "Invalid Zip!!";
                addressBookArray[index].zip = zip;     
                break;
            case 7:
                let phoneNumber = prompt("Enter Phone Number ");
                if(!phoneNumberRegex.test(phoneNumber))
                    throw "Invalid Phone number!!"
                addressBookArray[index].phoneNumber = phoneNumber;     
                break;
            case 8:
                let email = prompt("Enter Email ");
                if(!emailRegex.test(email))
                    throw "Invalid Email!!";
                addressBookArray[index].email = email;     
                break;
            default:
                "Invalid Input"           
        }
        console.log("Contact edited successfully!!");
    }
}

do {
    console.log("\n0.Exit \n1.Add Contact \n2.Edit Contact");
    choice = Number(prompt("Enter Your Choice "));
    switch (choice) {
        case 1: 
            try{
                addContact(getContact());
            }catch(ex){
                console.log(ex);
            }
            break;
        case 2:
            try{
                editContact();
            }catch(ex){
                console.log(ex);
            }
            break;
        default: 
            console.log("Invalid Choice !!");
    }

} while (choice != 0)