const involDt = 'invol refund due to '
const doi = 'DOI - '
const tkt = 'TKT - '

function sumAll() {
    let allInfo = ['']
    const formValue = document.RAfull.length
    allInfo.shift()
    for (let i = 0; i < formValue; i++) {
        allInfo[i] = document.RAfull[i].value
        // console.log(allInfo)
        document.RAfull[6].value = `${involDt + allInfo.slice(1, 3).join(' ')} / ${tkt}${allInfo[3]} / ${doi}${allInfo[4]} / ${allInfo[5]}`
    }
}



let str = 'TAX    158280YQ TAX      7914YR TAX      4456UJ TAX      4922DE TAX     21132RA TAX     96636GB TAX      8709UB';
let regexp = /..........[a-zA-Z][a-zA-Z]/gi;
let matches_array = str.match(regexp);

console.log(matches_array);