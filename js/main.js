const involDt = 'inv rf dt '.toUpperCase(),
    doi = 'DOI - ',
    tkt = 'TKT - ',
    newTkt = 'NEWTKT - ',
    newTktDoi = 'DOI - ',
    cpns = 'CPN TO REF - ',
    reissue = 'REISSUE-0',
    farePaid = 'FARE PAID',
    farePaidAdd = 'FARE PAID + ADD PAID',
    tktPrice = 'TKT PRICE',
    totRef = 'TOT TO REF'
let fareUsed = 'FARE USED'
const taxToRef = 'TAX TO REF'








function partial() {
    const findTaxes = document.raValues[21].value.split(' ')
    const taxesFqq = document.raValues[22].value.split(' ')
    const bsr = +document.raValues[23].value,
        roe = +document.raValues[24].value,
        nuc = +document.raValues[25].value,
        fare = +document.raValues[26].value


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
    const allTaxesFqq = taxesFqq
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
    // console.log('filteredAllTaxes', filteredAllTaxes)


    // видалення пустих значень FQQ такс
    const filteredAllTaxesFqq = allTaxesFqq
        .filter(tax => tax.name != '')
    // console.log('filteredAllTaxesFqq', filteredAllTaxesFqq)


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

    // console.log('result', result)


    // розстановка такс окремо
    for (let i = 0; i < result.length; i++) {
        document.getElementsByClassName('taxess')[i].style.display = 'inline'
        document.raValues[i + 31].value = result[i].value + ' ' + result[i].name
    }

    // такси окремо в строку
    const taxRef = result.map((key) => {
        return (key.value + key.name)
    })

    // сумма такс
    const sumTax = document.raValues[17].value = result.map((key) => {
        return key.value
    }).reduce((acc, key) => {
        return acc + key
    }, 0).toFixed(2)
    // console.log(sumTax)



    // використанний/до повернення тариф/такси / розрахунки
    const usedFare = document.raValues[13].value = (nuc * roe * bsr).toFixed(2)
    const fareRef = +fare - (+usedFare).toFixed(2)
    const totalToRef = document.raValues[14].value = (+fareRef + +sumTax).toFixed(2)
    // console.log(usedFare)
    // console.log(fareRef)
    // console.log(sumTax)
    // console.log(totalToRef)




    for (let i = 19; i < 21; i++) {
        if (document.getElementById('fp').value === document.raValues[i].placeholder) {
            document.raValues[i].value = totalToRef
        } else if (document.getElementById('fp').value === 'FP CC + FP CASH') {
            document.raValues[19].value = (totalToRef - document.raValues[20].value)
        } else {
            document.raValues[i].value = ''
        }
    }



    // формування строки
    if (document.itemsCheck.ra.value === 'refund1') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'refund2') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'refund3') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${farePaid} ${allInfo[10]} / ${taxToRef} ${allInfo[17]} / ${tktPrice} ${allInfo[12]} / ${tktPrice} ${allInfo[12]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${reissue} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'refund4') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${farePaidAdd} ${allInfo[11]} / ${taxToRef} ${allInfo[17]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'refund5') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${cpns}${allInfo[8]} / ${fareUsed} ${allInfo[13]} / ${taxToRef} - ${taxRef.join(' ')} / ${totRef} - ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'refund6') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${farePaidAdd} ${allInfo[13]} / ${cpns}${allInfo[8]} / ${fareUsed} ${allInfo[13]} / ${taxToRef} ${allInfo[17]} / ${allInfo[18]}`
        }
    }
    if (document.itemsCheck.ra.value === 'refund7') {
        let allInfo = ['']
        for (let i = 2; i < 56; i++) {
            allInfo[i] = document.raValues[i].value
            document.raValues[29].value = `${involDt}${allInfo[2]} ${allInfo[3]} / ${tkt}${allInfo[4]} / ${doi}${allInfo[5]} / ${newTkt}${allInfo[6]} / ${newTktDoi}${allInfo[7]} / ${reissue} / ${cpns}${allInfo[8]} / ${farePaid} ${allInfo[10]} / ${fareUsed} ${allInfo[13]} / ${taxToRef} ${allInfo[17]} / ${allInfo[18]}`
        }
    }
}