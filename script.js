let myName = "Adim Ekene Micheal";
let myCourses = ["HTML", "CSS", "JavaScript"];
console.log(`my name is: ${myName}`);
console.log(`my courses are: ${myCourses}`);

for (let i = 0; i<=200; i++) {
	if (myCourses.length % 3 === i % 3) {
		console.log(i);
	}
}