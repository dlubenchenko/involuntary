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


function RAreissue() {
    let el = document.RAreissued[8].value
    // numEl изначально строка, чтобы числа не складывались друг с другом, а приписывались
    let numEl = ''
    // Перебираем каждый символ. Если символ можно распарсить как номер, приписываем к строке
    for (let index in el) {
        if (parseInt(el[index]) === Number.parseInt(el[index])) {
            numEl += el[index]
            console.log(true)
        }
    }
    return console.log(parseInt(numEl)); // 5356
}