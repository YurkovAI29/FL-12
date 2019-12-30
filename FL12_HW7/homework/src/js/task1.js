let mail = prompt('Enter your email');
let password;
let changePass;
let newPassFirst;
let newPassSecond;
let minPass = 5;
let minNewPass = 6;

if (!mail) {
    alert('Canceled');
} else 

if (mail.length < minPass) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else

if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
    password = prompt('Enter your password');
        if (!password) {
            alert('Canceled');
        }
} else {
    alert('I don’t know you');
}

if (mail === 'user@gmail.com' && password === 'UserPass' || mail === 'admin@gmail.com' && password === 'AdminPass') {
    changePass = confirm('Do you want to change your password?');
    if (!changePass) {
        alert('You have failed the change.');
    } else {
        password = prompt('Please write the old password');
        if (!password) {
            alert('Canceled');
        } else if (mail === 'user@gmail.com' && password === 'UserPass' || 
               mail === 'admin@gmail.com' && password === 'AdminPass') {
                    newPassFirst = prompt('Enter new password');
                    if (!newPassFirst) {
                        alert('Cancel');
                    } else if (newPassFirst.length < minNewPass) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        newPassSecond = prompt('Enter new password again');
                    }

                    if (newPassFirst !== newPassSecond) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
    }
} else {
    alert('Wrong password');
}