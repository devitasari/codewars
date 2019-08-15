// var lis = [1,2,3,4,5,6, ['active', 'bold', 'classic', 'daring']]
// var arr = []
// for (var i=0; i<lis.length; i++) {
//     if (i%2 === 0) {
//         if (typeof lis[i] === 'number') {
//             arr.push(lis[i])
//         } else {
//             for (var j=0; j<lis[i].length; j++) {       //mengakses ['active', 'bold', 'classic', 'daring'] dengan indeks j
//                 if (j%2 === 0) {
//                     arr.push([])
//                     for (var k=0; k<lis[i][j].length; k++) {        //mengakses string dengan indeks k
//                       if (k%2 === 0) {
//                         arr[arr.length-1].push(lis[i][j][k])
//                       }  
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(arr)
//output: 
//[1,3,5,['a','t','v'],['c','a','s','c']]


var lis = [1,2,3,4,5,6, ['active', 'bold', 'classic', 'daring']]
var arr1 = []
for (var i=0; i<lis.length; i++) {
    if (typeof(lis[i]) === 'number') {
        if (i%2 === 0) {
            arr1.push(lis[i])
        }
    } else {
        for (var j=0; j<lis[i].length; j++) {
            if (j%2 === 0) {
                arr1.push([])
                for (var k=0; k<lis[i][j].length; k++) {
                    if (k%2 === 0) {
                        arr1[arr1.length-1].push(lis[i][j][k])
                    }
                }
            }
        }
    }
}
console.log(arr1)

