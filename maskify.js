function maskify(cc) {
    var cc1 = ''
    for (var i=0; i<cc.length; i++) {
        if (i<cc.length-4) {
            cc1 += '#'
        } else {
            cc1 += cc[i]
        }
    }
    return cc1
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');