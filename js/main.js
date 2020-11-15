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



let findTaxes = 'TX01 EUR    198.52YR  TX02 EUR      4.68FR  TX03 EUR     19.64QX           TX04 EUR      3.00M6  TX05 EUR     20.00TR  TX06 EUR      3.33XA           TX07 EUR      5.88XY  TX08 EUR      4.95YC  TX09 EUR      4.70AY           TX10 EUR      7.06CJ  TX11 EUR      6.93RN  TX12 EUR      3.78XF'.split(' ')
const taxesFqq = 'EUR    11.76-YQ   XT EUR 4.68-FR EUR 19.64-QX EUR 3.00-QX EUR   100.73-YR   EUR 20.00-TR EUR 3.33-XA EUR 5.88-XY EUR EUR    61.48-XT   4.95-YC'.split(' ')


//
let allTaxes = findTaxes
    .filter(tax => tax != '' && tax.indexOf('TX') && tax.indexOf(findTaxes[1]))
    .map(tax => {
        return {
            name: tax.slice(-2),
            value: Number(tax.slice(0, -2))
        }
    })
// console.log(allTaxes)


let filter = (taxValue) => {
    i = 0
    j = 1
    while (i < taxValue.length) {
        while (j < taxValue.length) {
            if (taxValue[i].name === taxValue[j].name) {
                taxValue[i].value += taxValue[j].value
                taxValue[j].name = ''
                taxValue[j].value = ''
            }
            j++
        }
        i++
        j = i + 1
    }
}
filter(allTaxes)
// console.log(allTaxes)

const filteredAllTaxes = allTaxes
    .filter(tax => tax.name != '')
    .map(tax => {
        return {
            name: tax.name,
            value: Number(tax.value.toFixed(2))
        }
    })
console.log('filteredAllTaxes', filteredAllTaxes)


let allTaxesFqq = taxesFqq
    .filter(tax => tax != '' && tax.indexOf(findTaxes[1]) && tax.indexOf('XT') && tax.slice(-2).indexOf('YQ') && tax.slice(-2).indexOf('YR'))
    .map(tax => {
        return {
            name: tax.slice(-2),
            value: Number(tax.slice(0, -3))
        }
    })

filter(allTaxesFqq)
const filteredAllTaxesFqq = allTaxesFqq
    .filter(tax => tax.name != '')
console.log('filteredAllTaxesFqq', filteredAllTaxesFqq)





let result = filteredAllTaxes
    .map(tax => {
        for (let i = 0; i < filteredAllTaxesFqq.length; i++) {
            if (tax.name === filteredAllTaxesFqq[i].name) {
                return {
                    name: tax.name,
                    value: tax.value - filteredAllTaxesFqq[i].value
                }
            } 
        }
        return {
            name: tax.name,
            value: tax.value
        }
    })
    .filter(tax => tax.value > 0)

console.log('result', result)




