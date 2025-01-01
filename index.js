let students = [
    {
        name: 'Tom',
        grade: 79,
        student_number: 3
    },
    {
        name: 'Ann',
        grade: 81,
        student_number: 2
    },
    {
        name: 'Carl',
        grade: 92,
        student_number: 1
    }];

/*
DESCRIPTION:
This ECMAScript 6 code defines a function named calculate_grade_average, which takes an
 array of objects as an input parameter. Each object in the array is assumed to have a
 grade property. This function calculates the average of the grade properties of all the
 objects in the array.

 USAGE:
 calculate_grade_average([{grade: 79}, {grade: 81}, {grade: 84}]), it will average the
 grades 64, 79, and 87, and return the result 84.

 average = (79 + 81 + 92)/3
 average = (252)/3
 average = 84

 Note: array.length gives the number of elements in the array, and array indexes start
 from 0.
 */

function calculate_grade_average(array)
{
    let sum = 0;

    for(let i = 0; i <= array.length - 1; i++){
        sum = sum +array[i].grade;
    }

    return sum/array.length;
}

let average = calculate_grade_average(students);


console.log(average);

