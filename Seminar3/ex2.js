const arr = [5, 7, 9, 13, 15];

function sumaDivizibile(arr, divizor) {
    return arr.filter(el => (el % divizor == 0)).reduce((acc, el) => acc + el);
}

console.log(sumaDivizibile(arr, 3));