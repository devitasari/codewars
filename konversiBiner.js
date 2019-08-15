// Test 

// var arr = [0, 0, 0, 1];
// console.log(arr.join())
// desimal = ((Number(arr[0]))*(2**3)) + ((Number(arr[1]))*(2**2)) + ((Number(arr[2]))*(2**1)) + ((Number(arr[3]))*(2**0))
// console.log(desimal)

// Ide : 
// Array diubah ke string dengan namaArray.join().
// konversi ke desimal :
// 1. Faktor pengali adalah 2 pangkat (length-i), i dimulai dari 1.
// 2. Jumlahkan semua konversi number dari elemen string yang dikali faktor pengali.

function konversiBiner(arr) {
    var multiplyFactor = 0;
    arr = arr.join('');
    var output = 0;
    for (var i=1; i<=arr.length; i++) {
        multiplyFactor = 2**(arr.length-i)
        output = output + ((Number(arr[i-1]))*multiplyFactor)
    }
    console.log(output)
}
konversiBiner([0,0,0,1])