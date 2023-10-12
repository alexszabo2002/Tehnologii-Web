const arr = [1, 2, 3, 4];

const mapArr = arr.map((el, index) => {
    return el * 2 * index;
})

console.log(arr);
console.log(mapArr);