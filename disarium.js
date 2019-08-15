function disariumNumber(n){
    // var n = 89
    var result = 0
    for(var i=0; i<String(n).length; i++) {
        result = result + (Number((String(n)[i]))**(i+1))
    }
    if (result === n) {
        return 'Disarium !!'
    } else {
        return 'Not !!'
    }

  }

  console.log(disariumNumber(89))

// console.log(Number((String(n)[0])))