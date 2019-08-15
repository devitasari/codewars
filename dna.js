function DNAStrand(dna) {
    var output = '';
    for (var i=1; i<=dna.length; i++) {
    switch (dna[i-1]) {
    case 'A' : output += 'T';
    break;
    case 'T' : output += 'A';
    break;
    case 'C' : output += 'G';
    break;
    case 'G' : output += 'C';
    break;
    }
  }
  console.log(output);
}  
DNAStrand('TTTT')