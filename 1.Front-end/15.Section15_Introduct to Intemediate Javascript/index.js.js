// Love calculator

// function myRandom(maxNum){
//     var n = Math.random();

//     n = n *maxNum;

//     n = Math.floor(n) +1;

//     return n;
    
// }

// var femaleName = prompt("Enter your name: ");
// var maleName = prompt("Enter your name: ");

// var loveLevel = myRandom(100);

// console.log("Your love level: "+loveLevel+" %");

// var output = [];


// for (i =1; i<=100;i++){
  

//     if(i%3==0 && i%5 !=0){
//         output.push("Fizz");
//     }
//     else if(i%5==0 && i%3 !=0){
//         output.push("Buzz")
//     }
//    else  if(i % 3 ==0 && i%5 ==0){
//         output.push("FizzBuzz");
//     }else{
//        output.push(i); 
//    }

//     //  if(i % 3 !=0 || i%5 !=0){
//     //     output.push(i);
//     // }

    
    
  
 
// }
// console.log(output);

// loop statement
// i = 0;
// while (i<10){
//     console.log(i);
//     i++
// }


function beer(){

    var numerOfBeer = 99;
    while(numerOfBeer >0){
       if(numerOfBeer>1 ){
             console.log(numerOfBeer+" bottles of beer on the wall, "+numerOfBeer+" bottles of beer.")

            console.log("Take one down and pass it around, "+ (numerOfBeer-1) +" bottles of beer on the wall.") 
        }
    else{
            console.log(numerOfBeer+" bottle of beer on the wall, "+numerOfBeer+" bottles of beer.")

             console.log("Take one down and pass it around, no more bottles of beer on the wall.") }
        if((numerOfBeer-1)===0){
        console.log("No more bottles of beer on the wall, no more bottles of beer. ");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
    numerOfBeer--;  
    }
        
}


beer();





