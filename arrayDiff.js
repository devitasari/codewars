function array_diff(a, b) {
    var copy = []
    var copy2 = []
    copy2.push(b[0])
    for (var c=0; c<a.length; c++) {
        copy.push(a[c])
    }
    //harus bisa menghapus angka yang double dari array b
    for (var d=1; d<b.length; d++) {
        for (var e=0; e<copy2.length; e++)
            if (b[d] === copy2[e]) {
                copy2.splice(e,1)
            }
        copy2.push(b[d])
    }
    for (var i=0; i<a.length; i++) {
        for (var j=0; j<copy2.length; j++) {
            if (a[i] === copy2[j]) {
                var d = copy.indexOf(a[i])

                copy.splice(d,1)

            }
        }  
    }

  return copy2
}

console.log(array_diff([1,2,2,2,3],[2]))
console.log(array_diff([1,2],[]))
console.log(array_diff([8,0,-9,-13,2,19,-14,-15,-17,17],[8,-14,19,0,12]))
console.log(array_diff([3,-1,-3,-16,-16,2,-19,5,-16,13],[-1,3,-19,5,-3,-16,-16,13]))
console.log(array_diff([-1,19,8,19,18,19,-3,-20,-20,3,8,3,3,-5,8,-13,-11],[8,3,-20,-13,19,8,18,-11]))
console.log(array_diff([-10,12,15,-13,-9,19,-9,-4,-6,-11,16,-9,-16,-3,-8,9,12,-13],[16,-13,-9,-3,-11,-6,12,-16,-9,-8,19,9,-9,-4,12]))
console.log(array_diff([12,-2,-13,9,-4,-4,-2,4],[4,-2,12,-2,9]))