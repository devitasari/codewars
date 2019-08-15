function findUniq(arr) {
    // do magic

    for (var i=0; i<arr.length; i++) {
        var count = 0
        for (var j=0; j<arr.length; j++) {
            if (arr[i] === kata[j]) {
                count++
            }
        }
        if (count === 1) {
            return arr[i]
        }    
    }
  }

console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
console.log(findUniq([ 0, 1, 1, 1, 1]), 0)