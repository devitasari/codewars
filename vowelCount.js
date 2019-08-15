function vowel(str) {
    vowelsCount = 0
    for (var i=0; i<str.length; i++) {
        if (str[i] === 'a' || str[i] === 'u' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o') {
            vowelsCount++
        }
    }
    return vowelsCount
}
console.log(vowel('ababil'))