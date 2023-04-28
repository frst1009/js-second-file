//first task

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies, ]; }
//     this.setNewStatus = function (newStatus) {
// this.status = newStatus;
//     }
// }

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';
//     }
//     setTechnologies(technologies) {
//         this.technologies.push(...technologies);
//     }
//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     }

// }


// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);

//task 2(copy pasted from git to analise the code here)

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     compareAge(newPerson) {
//         if (this.age > newPerson.age) {
//             alert(`${this.name} older  ${newPerson.name}`);
//         } else if (this.age < newPerson.age) {
//             alert(`${this.name} younger   ${newPerson.name}`);
//         }
//     }
// }

// const person1 = new Person('Maxim', 24);
// const person2 = new Person('Svetlana', 36);
// const person3 = new Person('Irina', 23);

// person1.compareAge(person2); // Maxim is younger than Svetlana
// person2.compareAge(person3); // Svetlana is older than Irina
// person3.compareAge(person1); // Irina is younger than Maxim


//task 3

// class CarService {
//     static DefaultWorkingHours = {
//         from: '9:00',//start time of working hours
//         till: '20.00',//end of it
//     };
//     constructor(name, workingHours=CarService.DefaultWorkingHours) {
//         this.name = name;
//         this.workingHours = workingHours;
//     }
//     RepairCar(carName) {
//         if (!carName || typeof carName != "string") {
//             console.error("Where is Name?");
//             return;
//         }
//         let now = new Date().getHours();
//         let fromhours = this.workingHours.from.split(":")[0];
//         let tillhours = this.workingHours.till.split(":")[0];
//         if (now < fromhours || now >= tillhours) {
//             alert("Unfortunately, we are closed now. Come back tomorrow");
//         }

//         else {
//             alert("Now we will repair your car carName! Please wait");
//         }
//     }
// }
// const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
// carService.RepairCar('BMW');

// class Dictionary{
//     constructor(name){
//         this.name=name;
//         this.words={};
//     }
//     add(word, description) {
//         if (!this.words.hasOwnProperty(word))
//             this.words[word] = { word, description };
//     }
//     remove(word) {
//         delete this.words[word];
//     }
//     get(word) {
//         return this.words[word];
//     }
//     showAllWords() {
//         for (const word in this.words) {
//             console.log(`${word} - ${this.words[word].description}`);
//     }
// }
// }
// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
 
// dictionary.remove('JavaScript');
// dictionary.showAllWords();


