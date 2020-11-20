const involDt = 'inv rf dt '.toUpperCase()
const doi = 'DOI - '
const tkt = 'TKT - '
const newTkt = 'NEWTKT - '
const newTktDoi = 'DOI - '
const cpns = 'CPN TO REF - '
const reissue = 'REISSUE-0'
const farePaid = 'FARE PAID'
const farePaidAdd = 'FARE PAID + ADD PAID'
const tktPrice = 'TKT PRICE'
let fareUsed = 'FARE USED'
const taxToRef = 'TAX TO REF'








function partial() {
    let findTaxes = document.raValues[21].value.split(' ')
    let taxesFqq = document.raValues[22].value.split(' ')


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
        .map(tax => {
            if (tax.name === 'YR') {
                return {
                    name: tax.name,
                    value: +(tax.value - document.raValues[28].value).toFixed(2)
                }
            }
            if (tax.name === 'YQ') {
                return {
                    name: tax.name,
                    value: +(tax.value - document.raValues[27].value).toFixed(2)
                }
            }
            return {
                name: tax.name,
                value: +tax.value
            }
        })

    console.log('result', result)



    for (let i = 0; i < result.length; i++) {
        document.getElementsByClassName('taxess')[i].style.display = 'inline'
        document.raValues[i + 31].value = result[i].value + ' ' + result[i].name
    }

    result.forEach((el) => {
        let temp = document.raValues[17].value += (el.value + ' ' + el.name + ' / ')
        return temp
    });

    const bsr = +document.raValues[23].value
    const roe = +document.raValues[24].value
    const nuc = +document.raValues[25].value
    const fare = +document.raValues[26].value
    
    const usedFare = document.raValues[13].value = (nuc * roe * bsr).toFixed(2)
    const fareRef = fare - usedFare



    let sum = document.raValues[56].value = result.reduce((acc, tax) => {
        return (+acc + +tax.value).toFixed(2)
    }, 0)

    // document.partialRef[14].value = +sum + +fareRef + +document.partialRef[15].value + +document.partialRef[16].value

}




function sumAll() {
    if (document.itemsCheck.ra.value === 'Full refund') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'Full refund reissued involuntary') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'Full refund reissued involuntary Altea, Farelogix') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${farePaid} ${allInfo[10]} / ${taxToRef} ${allInfo[17]} / ${tktPrice} ${allInfo[12]} / ${tktPrice} ${allInfo[12]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${reissue} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'Full refund reissued voluntary') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${farePaidAdd} ${allInfo[11]} / ${taxToRef} ${allInfo[17]} / ${allInfo[18]}`
        }
        console.log(allInfo)
    }
    if (document.itemsCheck.ra.value === 'Partly used refund') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${cpns}${allInfo[8]} / ${fareUsed} ${allInfo[13]} / ${taxToRef} ${allInfo[17]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'Partly used refund reissued voluntary') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${farePaidAdd} ${allInfo[13]} / ${cpns}${allInfo[8]} / ${fareUsed} ${allInfo[13]} / ${taxToRef} ${allInfo[17]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'Partly used refund reissued involuntary') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${reissue} / ${cpns}${allInfo[8]} / ${farePaid} ${allInfo[10]} / ${fareUsed} ${allInfo[13]} / ${taxToRef} ${allInfo[17]} / ${allInfo[18]}`
        }
    }
}