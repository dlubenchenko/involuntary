const involDt = 'invol refund due to '
const doi = 'DOI - '
const tkt = 'TKT - '
function sumAll() {
    let allInfo = ['']
    const formValue = 7
    allInfo.shift()
    for (let i = 0; i < formValue; i++) {
        allInfo[i] = document.RAfull[i].value
        // console.log(allInfo)
        document.RAfull[6].value = `${involDt + allInfo.slice(1, 3).join(' ')} / ${tkt}${allInfo[3]} / ${doi}${allInfo[4]} / ${allInfo[5]}`
    }
}

function RAreissue() {
    let reissued = ['']
    reissued[0] = document.RAreissued[8].value
    console.log(reissued)
}