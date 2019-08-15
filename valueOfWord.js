function high(x){
x = x.split(' ')
var arrMark = []
var arrMark1 = []
var arrMarkIn = []
// var mark = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
var abj = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for (var i=0; i<x.length; i++) {
    var mark = 0
    for (var j=0; j<x[i].length; j++) {
        mark += abj.indexOf(x[i][j]) 
    }
    arrMarkIn.push(i)
    arrMark.push(mark)
    arrMark1.push(mark)
}
// return arrMark
arrMark1.sort(function(a,b){return a<b})
var y = arrMark.indexOf(arrMark1[0])
return x[arrMarkIn[y]]
}
console.log(high('man i need a taxi up to ubud'))