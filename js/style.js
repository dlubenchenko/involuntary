
function findOption() {
    if(document.itemsCheck.ra.value === 'Full refund'){
        for (let i = 0; i < 31; i++) {
            if (i === 2 || i === 3 || i === 4 || i === 5 || i === 18 || i === 29) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
            }
        }
    } if (document.itemsCheck.ra.value === 'Full refund reissued involuntary') {
        for (let i = 0; i < 31; i++) {
            if (i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 18 || i === 29) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
            }
        }
    } if (document.itemsCheck.ra.value === 'Full refund reissued involuntary Altea, Farelogix') {
        for (let i = 0; i < 31; i++) {
            if (i === 2 || i === 3 || i === 17 || i === 4 || i === 5 || i === 18 || i === 10 || i === 12 || i === 6 || i === 7 || i === 9 || i === 29) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
            }
        }
    } if (document.itemsCheck.ra.value === 'Full refund reissued voluntary') {
        for (let i = 0; i < 31; i++) {
            if (i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 11 || i === 17 || i === 18 || i === 29) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
            }
        }
    } if (document.itemsCheck.ra.value === 'Partly used refund') {
        for (let i = 0; i < 57; i++) {
            if (i === 2 || i === 3 || i === 4 || i === 5 || i === 8 || i === 13 || i === 17 || i === 18 || i === 21 || i === 22 || i === 23 || i === 29 || i === 24 || i === 25 || i === 26 || i === 27 || i === 28 || i === 30 || i === 56) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
            }
        }
    } if (document.itemsCheck.ra.value === 'Partly used refund reissued voluntary') {
        for (let i = 0; i < 31; i++) {
            if (i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 13 || i === 10 || i === 17 || i === 18 || i === 29) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
            }
        }
    } if (document.itemsCheck.ra.value === 'Partly used refund reissued involuntary') {
        for (let i = 0; i < 31; i++) {
            if (i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 9 || i === 8 || i === 10 || i === 13 || i === 17 || i === 18 || i === 29) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
            }
        }
    }
}



