/*
Learn react book: 57
Check Node.js version
>>node -v

New project
>>npm init -y

Install project dependecies:
>>npm install

Install Packages
>>npm install package-name

Remove a package
>>npm remove package-name
*/


//Template strings - Accept multiline strings
console.log(`${lastName}, ${firstName} ${middleName}`);

console.log(`${lastName}, 
            ${firstName} 
            ${middleName}`);

//Function declaration
function logCompliment() {
    console.log("You're doing great!");
    }

//Arrow function - the arrow points to what should be returned
const lordify = firstName => `${firstName} of Canterbury`;
console.log(lordify("Chris")) //Chris of Canterbury

const lordify2 = (firstName, land) => `${firstName} of ${land}`;
console.log(lordify2("Don", "Piscataway")) //Don of Piscataway

//Multiline arrow function
const lordify3 = (firstName, land) => { 
    //...function content
    return True
};

//Function that returns an object
// wrap the object you’re returning with parentheses
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
    });
console.log(person("Flad", "Hanson"));

//Spread operator:
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];

//The spread operator can also be used to get the remaining items in the array:
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade

//Fetch
fetch("https://api.randomuser.me/?nat=US&results=1")
.then(res => res.json())
.then(json => json.results)
.then(console.log)
.catch(console.error);


//Async
const getFakePerson = async () => {
    try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
    } catch (error) {
    console.error(error);
    }
    };
getFakePerson();