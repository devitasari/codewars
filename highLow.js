function highAndLow(numbers) {
    var numNew = numbers.split(' ')
    var biggest = numNew[0]
    var smallest = numNew[0]
    for (var i=0; i<numNew.length; i++) {
        if (Number(numNew[i]) > Number(biggest)) {
            biggest = numNew[i]
            // console.log(biggest)
        } else if (Number(numNew[i]) < Number(smallest)) {
            smallest = numNew[i]
            // console.log(smallest)
        }
    }
    return biggest + ' ' + smallest
}
console.log(highAndLow('1 2 3 4 5 3'))
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
