function isLeapYear(time) {

    let data = new Date(time);

    if (data.getFullYear() % 4 === 0) {
        return data.getFullYear() + ' is a leap year';
    } else if (isNaN(data)) {
        return 'Invalid Date';
    } else {
        return data.getFullYear() + ' is not a leap year';
    }
}
isLeapYear('2020-01-01 00:00:00777');
isLeapYear(1213131313135465656654564646542132132131); 
isLeapYear(1213131313); 

