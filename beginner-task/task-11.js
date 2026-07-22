// todo:       task-11          topic: Loop through the array with a for loop and log each item.

let numbers =[ 10, 20, 30, 40, 50 ,60, 70 ,80, 90];

let index = 0;
for( i = 0; i< numbers.length; i++){
    console.log( 'the array of index ',i);

    console.log(numbers[i]);
}

console.log('=========');
for(const isLoop of numbers){
    console.log(isLoop);
}