const arrayData = [0, 'a', 2, 'b', 'c'];
const numberArray = [];
const stringArray = [];

for( i=0; i<arrayData.length; i++){
    const data = arrayData[i];
    if(typeof(data) == 'number'){
        numberArray.push(data);
    } else {
        stringArray.push(data);
    }
}
console.log('numberArray :', numberArray)
console.log('stringArray:', stringArray)




const names = ['Sai', 'Krishna', "Khaja"] // ['Sai']
const result = names.filter(function(name){ 
    return name == 'Sai' || name == 'Krishna'
});
console.log(result);



const marks = [60, 80, 90, 55, 35] // add grace marks of 5 marks to each student
const result1 = [];
for(i=0; i<marks.length; i++){
    const marks1 = marks[i] + 5;
    result1.push(marks1);
}
console.log(result1)



const names1 = ['Sai', 'Krishna', "Khaja"] // ['Sai' Hi]
const result2 = names.map(function(name){ 
    var value =  name + 'Hi'
    return value
});
console.log(result2);