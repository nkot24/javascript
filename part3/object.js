const person = {
    name:'janis',
    lastname:'gurkis',
    age:18,
    isPersonStudent:true,
    course:'PT2024'
};
console.log(person.name);
console.log(person['name']);
if(person.age>=18){
    console.log('pilngadigs')
}else{
    console.log('nepilngadigs')
}
if(person.isPersonStudent=true){
    console.log('students')
}else{
    console.log('stradnieks')
}