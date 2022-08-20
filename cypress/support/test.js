
/*const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// Get a random number out of [10, 11, 12, 13]
random(10, 14);
// Get a random number from 1 to 100 (inclusive)
random(1, 101);
// Get a random number from -10 to 10 (inclusive)
random(-10, 11);
for(let i=1; i<20; i++){
    console.log(random(1912,2022));
}*/
let status=Math.round(Math.random())
 console.log(status)
 if(status==1)
 {
 status=true; 
 return  cy.get('#gender-male').check();
 }else{
 status=false;
 return  cy.get('#gender-female').check();
 }

