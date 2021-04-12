console.log('Script');
const taxes=0.16;
console.log(taxes);

var name="Antonio Enciso Villegas";
var userName="Anton980106";
var NumberChilddren= 3;
var partners="unknow";
var geographipc="Tijuana MX";
var job_title="Analytics System";






var grade=2.5;
grade=4.0;

var isAproved=true;
var firstName=undefined;
var lastName=null;

console.log(userName);
console.log(grade);
console.log(partners);
console.log(job_title);
console.log(NumberChilddren);
console.log(geographipc);
console.log(isAproved);
console.log(firstName);
console.log(lastName);

document.write(userName + " " + grade + " " + isAproved);
document.writeln(`<br> 
                   <h1>Name: ${name} </h1>
                   <p>Grade: ${grade} </p>`)
document.write  ( `<h2> Job Title </h2>  ${job_title} <h2> Geographic location </h2> ${geographipc}  
                  <h2> Number Of children </h2> ${NumberChilddren}`)
var client="Thad";
var email="thad@gmail.com";
var monthlysalary=1000;
var annualsalary=monthlysalary*12;
console.log(`Name: ${client} Email:${email} Salary: ${annualsalary}`);

console.time(`loop`);
for(var i=1;i<=1000;i+=2){
    console.log (`iteration`+i);
}
console.timeEnd(`loop`);
//if statement
if(userName==" Antonio "){
    console.log(" Yes is the same ")
}else{
    console.log(" They are not the same ")
}