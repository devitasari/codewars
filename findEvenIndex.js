function findEvenIndex(arr) {
    for (var i=0; i<arr.length-1; i++) {
        //cek ke kanan
        var sum1 = 0
        for (var j=i+1; j<arr.length; j++) {
            sum1 = sum1 + arr[j]
        }
        //cek ke kiri
        var sum2 = 0
        for (var k=0; k<i; k++) {
            sum2 = sum2 + arr[k]
        }
        if (sum1 === sum2) {
            return i
        } 
    }
    var sum = 0
    for (var a=1; a<arr.length; a++) {
        sum = sum + arr[a]
    }
    if (sum === 0) {
        return 0
    }
    var sum3 = 0
    for (var b=0; b<arr.length-1; b++) {
        sum3 = sum3 + arr[b]
    }
    if (sum3 === 0) {
        return arr.length-1
    }

    return -1
}


console.log(findEvenIndex([1,2,3,4,3,2,1])) //3
console.log(findEvenIndex([1,100,50,-51,1,1])) //1
console.log(findEvenIndex([1,2,3,4,5,6])) //-1
console.log(findEvenIndex([20,10,30,10,10,15,35])) //3
console.log(findEvenIndex([20,10,-80,10,10,15,35])) //0
console.log(findEvenIndex([8,8]))//-1
console.log(findEvenIndex([10,-80,10,10,15,35,20])) //6
console.log(findEvenIndex([0,8]))//1
console.log(findEvenIndex([8]))//0

