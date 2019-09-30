// This javascript file performs a merge sort by dividing the array into n/3 sublists.

const mergeSort = (values) => {

    var n = values.length; 

    // Check for array smaller than length 3 because it is not possible to divide into 3 lengths if 
    // the length of the array is smaller than 3. 
    if (n <= 3) {
        // the target_array is where place where the sorted values will be pushed
        var target_array = [values.shift()];

        while (values.length > 0) {
            if (values[0] < target_array[0]){
                //insert value at the beginning of the array
                target_array.unshift(values.shift())
            } 
            else {
                target_array.push(values.shift())
            } 
        }
        //Return the sorted array for any array less than size 3
        return target_array;
    }
    
    //create the 3 sublists by dividing by 3. I used the floor function to avoid decimal numbers 
    var sublist = Math.floor(n / 3);

    //Set the first sublist to index 0
    var first = values.splice(0, sublist);

    //Set the second sublist to index 2. (This is the third element in the array)
    var second = values.splice(2, sublist);

    //I used recursion here so that I can call the sort function on each sublist
    first = mergeSort(first);
    second = mergeSort(second);
    values = mergeSort(values);

    //Initialize the array to merge the sorted values from each sublist
    var target_array = [];
    for (var i = 0; i < n; i++) {
        if (first[0] <= second[0]) {
            if (first[0] <= values[0]) {
                //perform merge to the first sublist
                target_array.push(first.shift());
            }
            else {
                 //iterate to next position in array
                target_array.push(values.shift());
            }
        } 
        else {
            if (second[0] <= values[0]) {
                 //perform merge to the second sublist
                target_array.push(second.shift());
            }
            else{
                 //iterate to next position in array
                target_array.push(values.shift());
            } 
        }
    }
    //Return the final sorted array after merging all sublists
    return target_array;
}

//This array is the same array from the assignment. 
var test_values = mergeSort([123, 34, 189, 56, 150, 129, 240]);
console.log("Sorted Array Below: ");
console.log(test_values);