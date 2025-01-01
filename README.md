# calculate_grade_average

# DESCRIPTION
This ECMAScript 6 code defines a function named calculate_grade_average, which takes an
 array of objects as an input parameter. Each object in the array is assumed to have a
 grade property. This function calculates the average of the grade properties of all the
 objects in the array.

# USAGE
 calculate_grade_average([{grade: 79}, {grade: 81}, {grade: 84}]), it will average the
 grades 64, 79, and 87, and return the result 84.

```
 average = (79 + 81 + 92)/3      
 average = (252)/3     
 average = 84 
 ```       

 # CODE EXPLAIN

 Note: array.length gives the number of elements in the array, and array indexes start
 from 0.

The purpose of the function is to calculate the average of the grade properties of the objects in the array.

Here's how it works:

1. A variable sum is initialized with a value of 0. This will be used to store the cumulative sum of all the grade values in the array.

2. A for loop is used to iterate over each object in the array.
    On each iteration, the loop fetches the grade of the current object and adds its value to sum.

3. When the loop is finished (i.e., every object in the array has been processed), the function returns the average grade. This is done by dividing the total sum sum by the number of objects in the array (array.length).

The related information you've provided (grade: 79) appears to be an example of what each object in the array might look like. If the array was filled with objects like this, the function would calculate the average of all the grade values.