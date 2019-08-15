function expandedForm(num) {
    // Your code here
    num = String(num)    
    var kataBaru = []
    for (var i=num.length-1; i>=0; i--) {
        if (num[i] === '0') {
            continue
        } 
        else {
            kataBaru.unshift(' + ')
            for (var j=i ; j<num.length-1; j++) {
            kataBaru.unshift('0')
            }
        kataBaru.unshift(num[i])
        }
    }
    if (kataBaru[kataBaru.length-1] === ' + ') {
        kataBaru.pop()
    }
  return kataBaru.join('')
  }
  console.log(expandedForm(123))
  console.log(expandedForm(70304))
  console.log(expandedForm(101))
  console.log(expandedForm(1010))



