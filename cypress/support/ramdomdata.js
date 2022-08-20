
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function randomName(length){
    //random text
    //1.define so luong ki tu khoang 10
    //3. ngay max 28, thang 1-12, nam 1912-2022
    //4. random gender gan so
    //5. 
    //task 157
    //1. login test lay du lieu tu register
    //2. login list acc
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function randomDay(){
    var myArray = [
        "1",
        "2",
        "3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27",
        "28"
      ];
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      return randomItem;
}
export function randomMonth(){
    var myArray = [
        "January",
        "February",
        "March","April","May","June","July","August","September","October","November","December",
        
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      return randomItem;
}
export function randomYear(min, max){
   const year = Math.floor(Math.random()*(max-min)) + min;
   return year.toString();

}
/*export function randomGender(){
    let status=Math.round(Math.random())
    console.log(status)
    if(status==1)
    {
    status=true; 
    return  cy.get('#gender-male').check();
    }
    else{
    status=false;
    return  cy.get('#gender-female').check();
    }
}*/
export function randomGender(){
    const rand = Boolean(Math.round(Math.random()));
    if(rand==true) return cy.get('#gender-male').check();
    else return cy.get('#gender-female').check();
}
export function emailAccount(){
    var myArray = [
        "Adminnnnnn@gmail.com",
        "Adminnnnnn1@gmail.com3",
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      return randomItem;
}

/*export function randomYeara(min, max){
    const year = Math.floor(Math.random() * (max - min)) + min;
    return year;
}
export function randomGender(){
     var a = document.getElementById("#gender-male");
     var b = document.getElementById("#gender-female"); 
    var myArray = [
        a, b
      ];
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    if(randomItem == a) {
        return cy.get('#gender-male').check();
    }
    else {
        return cy.get('#gender-male').check();
    }
}*/
/*
export function SelectRadio() {
    var array = document.querySelectorAll('.sg-input.sg-input-radio');
    var winnerButton;
    var numberOfButtons = array.length;
    var randomNumber = Math.floor(Math.random() * numberOfButtons);
    
    winnerButton = array[randomNumber];
    
    winnerButton.checked = true;
   
    }
  
    SelectRadio();*/
   
