function makeNumbers (str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        
        if (parseInt(str[i])) {
            newStr += str[i];
        }
    }
    return(newStr);
}

makeNumbers('dsdasd545ffs45216afssf4654');