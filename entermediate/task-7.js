// todo:        task -7.        topic: Given an array of numbers, log only the values greater than 10, using a loop..

const numbers = [13, 4, 66, 44, 55, 90, 89, 5, 3, 23, 12 , 7 , 20];

for( let i =0; i< numbers.length ; i++){
    // console.log(i);

     let num = numbers[i];
     if( num > 10){
        console.log(num);
     }
}