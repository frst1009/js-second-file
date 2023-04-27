//first task
/*const users = [
    {
    username: 'David',
    status: 'online',
    lastActivity: 10
    }, {
    
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
    
    }, {
    
    username: 'Bob',
    status: 'online',
    lastActivity: 104
    }
    ];

    let onlineUsers=[];
for (let i= 0; i<users.length; i++) {
    if (users[i].status=='online' ) {
        onlineUsers.push(users[i].username);
    }
    alert(`the following users are currently online: ${onlineUsers},${onlineUsers}`);
}
*/
//second task
/*const student = {

    fullName: "Maxim",
    
    experienceInMonths: 12,
    
    stack: ['HTML', 'CSS', 'JS','React'],
    
    }
    student.job="web developer";
function giveJobToStudent(student,jobName){
    alert(`Congratulations! Student ${student.fullName} has a new job!
        It is now ${jobName.job}`);
}
    const updatedStudent = giveJobToStudent(student, student);
*/
//third task
/*
const student = {

    name: 'Maxim',
    programmingLanguage: 'JavaScript',
    }
    
function handleObjects(obj, key, action){
    if(action=='get'){
    return obj[key];
    }
    else if(action=='add'){
        obj[key]="";
        return obj;
    }
    else if(action=='delete'){
        delete obj[key];
        return obj;
    }
    else {
        return obj;
    }
}
    const result = handleObjects(student, 'programmingLanguage', 'delete');
    console.log('result', result);*/

//task 4
/*function getKiller(suspectInfo, deadPeople) {
    for (let key in suspectInfo) {
        let k = 0;

        for (let n of deadPeople) {
            if (suspectInfo[key].includes(n)) {
                k++;
            }
        }

        if (k == deadPeople.length) {
        return key;
        }
    }
}
getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    }, ['Lucas', 'Bill']
); // Killer James

getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
); // Killer Megan
*/
//fifth task
//function getWinner(applicants, winnerObject){}
















//date excercises
//1)
/*function getDateFormst(date, separator){
date = new Date();
    let df = date.getFullYear() + separator + ('0' + (date.getMonth()+1)).slice(-2) + separator + date.getDate();
}*/

//2)
/*function getDaysBeforeBirthday(bday){
let date=new Date();
bday=new Date(date.getFullYear(), 8, 15);
bday=Math.ceil( (bday.getTime()-date.getTime()) / (1000 * 3600 * 24));
}
*/

