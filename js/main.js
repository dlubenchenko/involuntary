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



const findTaxes = 'TX01 EUR    198.52YR  TX02 EUR      4.68FR  TX03 EUR     19.64QX           TX04 EUR      3.00M6  TX05 EUR     20.00TR  TX06 EUR      3.33XA           TX07 EUR      5.88XY  TX08 EUR      4.95YC  TX09 EUR      4.70AY           TX10 EUR      7.06CJ  TX11 EUR      6.93RN  TX12 EUR      3.78XF';

// выделение такс
const taxes = findTaxes.split(' ')
const filteredTaxes = taxes.filter((el) => {
    return el != '' && el.indexOf('TX') && el.indexOf(taxes[1])
  })
// console.log(filteredTaxes)

// разделение такс
let taxNum = []
let taxSymbol = []
filteredTaxes.forEach(el => {
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

console.log('Всі такси', '\n',  taxNum)
console.log(taxSymbol)


// FQQ
const taxesFqq = 'EUR    11.76-YQ   XT EUR 4.68-FR EUR 19.64-QX EUR 3.00-M6 EUR   100.73-YR   EUR 20.00-TR EUR 3.33-XA EUR 5.88-XY EUR EUR    61.48-XT   4.95-YC'

const filteredTaxFqq = taxesFqq.split(' ')
const filteredTaxesFQQ = filteredTaxFqq.filter((el) => {
    return el.indexOf(filteredTaxFqq[0]) && el != '' && el.indexOf('-') > -1 && el.slice(-2).indexOf('YQ') && el.slice(-2).indexOf('YR') && el.slice(-2).indexOf('XT')
  })
//   console.log(filteredTaxesFQQ)


// разделение такс FQQ
let taxNumFqq = []
let taxSymbolFqq = []
filteredTaxesFQQ.forEach(el => {
    return taxNumFqq.push(Number(el.slice(0,-3))) && taxSymbolFqq.push(el.slice(-2))
});
// console.log(taxNumFqq)
// console.log(taxSymbolFqq)

// поиск похожых
while (i < taxSymbolFqq.length) {
    while (j <= taxSymbolFqq.length) {
        if (taxSymbolFqq[i] === taxSymbolFqq[j]) {
            taxNumFqq[i] += taxNumFqq[j]
            taxNumFqq[j] = ''
            taxSymbolFqq[j] = ''            
        }
        j++
    }
    i++
    j = i + 1
}

// фильтр такс
taxSymbolFqq = taxSymbolFqq.filter((el) => {
    return el != ''
  })
  taxNumFqq = taxNumFqq.filter((el) => {
    return el != ''
  })

// Вручну додати YQ YR
taxNumFqq.push(100.73)
taxSymbolFqq.push('YR')

console.log('Всі використані такси', '\n', taxNumFqq)
console.log(taxSymbolFqq)






// поиск такс к возврату

const totatTax = {}
