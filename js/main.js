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



const findTaxes = 'TAX    158280YQ TAX      7914YR TAX      4456YQ TAX      4922DE TAX     21132RA TAX     96636RA TAX      8709RA';

// выделение такс
const taxes = findTaxes.split(' ').filter((el) => {
    return el != 'TAX' && el != ''
  })
// console.log(taxes)

// разделение такс
let taxNum = []
let taxSymbol = []
taxes.forEach(el => {
    return taxNum.push(Number(el.slice(0,-2))) && taxSymbol.push(el.slice(-2))
});
// console.log(taxNum)
// console.log(taxSymbol)

// поиск похожых
let i = 0
let j = 1
while (i < taxSymbol.length) {
    while (j <= taxSymbol.length) {
        if (taxSymbol[i] === taxSymbol[j]) {
            taxNum[i] += taxNum[j]
            taxNum[j] = ''
            taxSymbol[j] = ''            
        }
        j++
    }
    i++
    j = i + 1
}

// фильтр такс
taxSymbol = taxSymbol.filter((el) => {
    return el != ''
  })
taxNum = taxNum.filter((el) => {
    return el != ''
  })

console.log(taxNum)
console.log(taxSymbol)

