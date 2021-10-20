

//Data Types
	//Primitives: number, string, boolean, null, undefined
	//Complex: arrays, object
	//Function types, parameters


//Core Primitive Types:

	let age: number; //number
	age= 25;

	let userName: string; //string
	userName = "Manas"

	let isEligible: boolean; //boolean
	isEligible = true;


//Core Complex Types:

	let names: string[]; //Array of strings only
	names = ['Manas', 'Bruce', 'Clark'];

	let person: {
		name: string
		age: number
	};		//now this stores the exact types of the object


	let people: {
		name: 'Manas',
		age: 25
	}[];	//Here I have an array full of object i.e. array of opbjects


//Type Inference

	let song = "Welcome to the Machine!";
	// song = 12; This doesn't let to change types once declares


//Union

	let song: string | number = "Welcome to the Machine!"; //Type definition which allows more than one type
	song = 12; // Now the error is gone i.e. Union Allows to have more flexible types

//Type Aliases

	type Person = {
		name: string
		age: number
	};		//to avoid duplication


//Functions and types

function add(a: number, b: number){
	return(a + b);  //Return infers the type number automatically
} //we can specify the type also by adding '': number' after the parameters

function print(value:any){
	console.log(value);
} // This function doesn't returns hence the type infered is void

//Generics

function addUpFront<T>(array: T[], value: T){
	const newArray =  [value, ...array];
	return newArray;
}

const demoArray = [1,2,3];
const updatedArray = addUpFront(demoArray, -1) //[-1,2,3]

//Generics enable types, classes or interfaces to act as parameters.
//Locks the type| Much better than type any
