const involDt = 'invol refund due to '
const doi = 'DOI - '
const tkt = 'TKT - '
function sumAll() {
    let allInfo = ['']
    const formValue = 6
    allInfo.shift()
    for (let i = 1; i < formValue; i++) {
        allInfo.push(document.RA[i].value)
        console.log(allInfo)
        document.RA[6].value = involDt 
        + allInfo.slice(0, 2).join(' ') 
        + ' / ' 
        + tkt 
        + allInfo[2]
        + ' / '
        + doi
        + allInfo[3]
        +  ' / '
        + allInfo[4]
    }
}
