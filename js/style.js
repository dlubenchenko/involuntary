function findOption() {
        for (let i = 2; i < 56; i++) {
            if (document.raValues[i].className.indexOf(document.itemsCheck.ra.value) != -1) {
            document.raValues[i].style.display = 'inline'
            } else {
                document.raValues[i].style.display = 'none'
        }
    }    
}


function findFp() {
    for (let i = 19; i < 21; i++) {
        if (document.getElementById('fp').value === document.raValues[i].placeholder) {
        document.raValues[i].style.display = 'inline'
        } else if (document.getElementById('fp').value === 'FP CC + FP CASH') {
            document.raValues[19].style.display = 'inline'
            document.raValues[20].style.display = 'inline'
        } else {
            document.raValues[i].style.display = 'none'
        }
    }    
}