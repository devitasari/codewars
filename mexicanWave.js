function wave(kata){
    // Code here
    var kata1 = kata.split('')
    var wave = []
    for (var i=0; i<kata1.length; i++) {
        if (kata1[i] === ' ') {
            continue
        } else {
        var kataBaru = ''
        kata1[i] = kata1[i].toUpperCase()
        for (var j=0; j<kata1.length; j++) {
            kataBaru += kata1[j]
        }
        wave.push(kataBaru)
        kata1[i] = kata1[i].toLowerCase()
    }
    }
    return wave
}
console.log(wave('hello you'))


