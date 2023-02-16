const a = [1, 3, 5, 7, 9];
const aLoop = a.map((unit, idx) => {
    console.log(unit);
    return unit+2;
});
console.log(aLoop);