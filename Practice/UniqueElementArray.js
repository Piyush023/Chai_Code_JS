// Add the unique Elements in to a array from these 2 arrays.
const arr = [1,2,3,4,4]
const arr2 = [2,33,43,0,4];

const resArr = [...arr, ...arr2]
const resObj = {}

for(const i of resArr){
    resObj[i] = true
}

console.log(resObj)