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






function partial() {
    let findTaxes = document.getElementById("taxCallculate1").value.split(' ')
    let taxesFqq = document.getElementById("taxCallculate2").value.split(' ')
    
    
    // фільтр всіх такс
    let allTaxes = findTaxes
        .filter(tax => tax != '' && tax.indexOf('TX') && tax.indexOf(findTaxes[1]))
        .map(tax => {
            return {
                name: tax.slice(-2),
                value: Number(tax.slice(0, -2))
            }
        })
    // console.log(allTaxes)
    
    // фільтр FQQ такс
    let allTaxesFqq = taxesFqq
        .filter(tax => tax != '' && tax.indexOf(findTaxes[1]) && tax.slice(-2).indexOf('YQ') && tax.slice(-2).indexOf('YR'))
        .map(tax => {
            return {
                name: tax.slice(-2),
                value: Number(tax.slice(0, -3))
            }
        })
    // пошук одинакових
    const filtertax = (taxValue) => {
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
    // виклик фільтру
    filtertax(allTaxesFqq)
    filtertax(allTaxes)
    
    // видалення пустих значень всіх такс
    const filteredAllTaxes = allTaxes
        .filter(tax => tax.name != '')
        .map(tax => {
            return {
                name: tax.name,
                value: Number(tax.value.toFixed(2))
            }
        })
    console.log('filteredAllTaxes', filteredAllTaxes)
    
    
    // видалення пустих значень FQQ такс
    const filteredAllTaxesFqq = allTaxesFqq
        .filter(tax => tax.name != '')
    console.log('filteredAllTaxesFqq', filteredAllTaxesFqq)
    
    
    // всі такси - FQQ такси = такси до повернення
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

for (let i = 0; i < result.length; i++) {
    document.partialRef[i + 17].value = result[i].value + ' ' + result[i].name
}

const bsr = +document.partialRef[9].value
const roe = +document.partialRef[10].value
const nuc = +document.partialRef[11].value
const fare = +document.partialRef[12].value

const fareRef = document.partialRef[13].value = (fare - (nuc * roe * bsr)).toFixed(2)



var sum = result.reduce((acc, tax) => {
    return acc + tax.value
}, 0)

document.partialRef[14].value = +sum + +fareRef + +document.partialRef[15].value + +document.partialRef[16].value

}
