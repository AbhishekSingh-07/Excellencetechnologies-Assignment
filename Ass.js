
//Print Even number from an array
var arr= [12,11, 23, 33, 4, 2, 4, 3, 43, 456, 12 , 6 , 5];
for(var index=0; index < arr.length ; index++){
    if(arr[index] % 2 == 0){
        console.log(arr[index]);console.log(" is an even number.");
    }
}
// Maximum consecutive 1's from an array javascript
var arr_1_0= [1,0,0,0,0,1,1,1,0,1,1,0];
var count = 0; //intitialize count
var result = 0; //initialize max

for (var i = 0; i < arr_1_0.length; i++)
{
      
    // Reset count when 0 is found
    if (arr_1_0[i] == 0)
        count = 0;
    else
    {
        count++; //increase count
        result = Math.max(result, count);
    }
}
console.log(result);

// Sort JSON data
const obj= {
  id:4,name:'abc',
  id:10,name:'ab2',
  id:5,name:'abc3',
  id:6,name:'abc5'
}


function sortKeys(obj_1) {
  var key = Object.keys(obj_1)
  .sort(function order(key1, key2) {
      if (key1 < key2) return -1;
      else if (key1 > key2) return +1;
      else return 0;
  }); 
    
  // Taking the object in 'temp' object
  // and deleting the original object.
  var temp = {};
    
  for (var i = 0; i < key.length; i++) {
      temp[key[i]] = obj_1[key[i]];
      delete obj_1[key[i]];
  } 

  // Copying the object from 'temp' to 
  // 'original object'.
  for (var i = 0; i < key.length; i++) {
      obj_1[key[i]] = temp[key[i]];
  } 
  return obj_1;
}
console.log(JSON.stringify(sortKeys(obj)))