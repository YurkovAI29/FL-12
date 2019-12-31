function countNumbers (str) {
    let obj = {};
    
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = 1;

        if (!isNaN(str[i])) {
            obj[str[i]]++;
        }
    }
    return obj;
}

countNumbers('dsdasd545ffs45216afssf4654');

