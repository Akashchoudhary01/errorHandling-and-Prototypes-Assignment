                /////// Assingment /////////////

/* 1 . type conversion
// write a function called convertToNumber that takes a string as an argument and return the equivalent number. if the string cannot be convertd to a number, the function should return the string "Invalid number". Use an error handling in js to achieve the output. */

function convertToNumber(str){
    try{
        const numb = Number(str);
        if (Number.isNaN(numb)){
            throw new Error("Invalid number");
        }
        return numb;
    }catch (error){
        return error.message;
    }
}
console.log(convertToNumber("123"));
console.log(convertToNumber("PW"));


/* 2.  Building robust function in javascript
// Create a function called get person that takes an object as a parameter representing a person's name and age. The function should return the person's` name and age as a string in the format "name:<name> , Age:<age>"
However, if the parameter is not avalid object with the properties "name" and "age", the function should throw an error with the message "invalid parameter type". Use try - catch to hendle this error and return the error message if it occure
*/

function getPerson(person){
    try{
        if(typeof person !=="object" || !person.name || !person.age){
        throw new Error("invalid parameter type");
    }
    return `name: ${person.name} , ${person.age}`;
}
catch(error){
    return error.message;
}
}
///details
console.log(getPerson({name:"Akash" , age:20}));

/* 3.  Car Description Class.

// Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method
*/
class cars{
    constructor(c , m , y){
        this.company = c ;
        this.modal = m;
        this.year = y;
    }
    getDescription(){
        return `this beast is a  ${this.year} ${this.company} ${this.modal}`;
    }
}
const myCar = new cars("Audi" , "A6" , 2019);
console.log(myCar.getDescription());

/*
4. Employee Class Challenge.

//Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.*/

class Employee{
    constructor(name , position , salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalaryy(){
        return this.salary;
    }
    getName(){
        return this.name;
    }

}
let employee1 = new Employee("Anurag thakur" , "teacher" , 690000)
console.log(employee1.getName());
console.log(employee1.getSalaryy());

/*

/// 5. Implementing a Person Class with Default Values

Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.*/

 class Person{
    constructor(name = "unknown" , age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name} , Age: ${this.age}`;
    }
 }
 
 const person1 = new Person("Akash" , 20);
 console.log(person1.getDetails());

 //in the case if they are not provided
 const person2 = new Person();
 console.log(person2.getDetails());

 /*

6. Using Static Method to Add Two Numbers with Calculator Class

//Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.*/

class Calculator{
    static add(num1, num2){
        return num1+num2;
    }
} 
const result = Calculator.add(100 , 100);
console.log(result);

/*

7. Password Checker.

//Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.*/

class User{
    constructor(username , password){
        this.username = username;
        this.password = password;
    }
    getPassword(){
        return this.password.replace(/./g,"*");
    }
    setPassword(newPassword){
        let containsNumber = flase;
        let containsUppercase = false;
        for(let i = 0 ; i <newPassword.length; i++){
            const char = newPassword.charAt(i);
            if(!isNaN(char)){
                containsNumber = true;
            }
            else if (char === char.toUppercase()){
                containsUppercase = true;
            }
        }
        if( newPassword.length >= 8 && containsNumber &&containsUppercase )
        {
        this.password = newPassword;
    } else {
        console.log("Error: the new password is at least 8 characters long and contains at least one number and one uppercase letter");
    }
}
}
//
let user = new User ("Akash" , "akash");
console.log(user.getPassword());


/**8. Adding a Method to a Prototype.

// Create a prototype object called Student with a property name. Add a method called printDetails to the prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the name "Mithun" and call the printDetails method.

 */
function Student(name){
    this.name = name;
}
Student.prototype.printDetails = function(){
    console.log(`hello , Myself ${this.name}`);
};
//
const student =new Student("hitesh");
student.printDetails();

/**
 9. Check the presence using closures.

//Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise
 */
function numberChecker(numbers){
    return function(num){
        return numbers.includes(num);
    };
}
///
const arr = [1, 2, 3 ,4, 5];
const checknumber = numberChecker(arr);

console.log(checknumber(5));
console.log(checknumber(9));

/**
 10. Filter by Category.

//Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input.
 */
function filterByCategory(products){
    return function(category){
        return products.filter(function (product){
            return product.category === category;
        });
    }
}
var products = [
    { name:"bat" , category:"sports"},
    { name:"hitesh" , category:"teaching"},
    { name:"akash" , category:"trading"},
    { name:"ball" , category:"sports"}
];
var sportsProduct = filterByCategory(products)("sports");
console.log(sportsProduct);