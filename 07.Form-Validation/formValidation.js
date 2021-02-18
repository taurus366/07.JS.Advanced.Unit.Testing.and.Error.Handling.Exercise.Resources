function validate() {
    // regexes !
    let regexUsername = new RegExp('^[a-zA-Z0-9]{3,20}$');
    let regexPassword = new RegExp('^[a-zA-Z0-9\\_]{5,15}$');
    let regexEmail = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-z]{2,3}$');
    // regexes !

    // INPUTS !!!
    let companyInfoHIDDEN = document.querySelector('#companyInfo');
    let inputs = document.querySelectorAll('input');
    let username = inputs[0];
    let email = inputs[1];
    let password = inputs[2];
    let confirmPassword = inputs[3];
    let checkBoxCompany = inputs[4];
    let inputCompanyNumber = inputs[5];
    // INPUTS !!!

    let validVisiblity = document.querySelector('#valid');

    // BUTTON !!!
    let buttonSubmit = document.querySelector('#submit');
    // BUTTON !!!

    // CHECK BOX !!!
    checkBoxCompany.addEventListener('click', () => {
        if (companyInfoHIDDEN.style.display === 'none') {
            companyInfoHIDDEN.style.display = 'block';
        } else {
            companyInfoHIDDEN.style.display = 'none';
        }
    })
    // CHECK BOX !!!

    buttonSubmit.addEventListener('click', buttonClicked);


    function buttonClicked(ev) {

        let boolean = false;

        ev.preventDefault();

        if (regexUsername.test(username.value)) {
            borderColorRed(username);
            boolean = true;
        } else {
            boolean = false;
            borderColorRed(username, 'error');
        }

        if (regexEmail.test(email.value)) {
            borderColorRed(email);
            boolean = true;
        } else {
            boolean = false;
            borderColorRed(email, 'error');
        }

        if (regexPassword.test(password.value)) {
            boolean = true;
            borderColorRed(password);
        } else {
            boolean = false;
            borderColorRed(password, 'error');
        }
        if (regexPassword.test(confirmPassword.value) && password.value === confirmPassword.value) {
            borderColorRed(confirmPassword);
            boolean = true;
        } else {
            boolean = false;
            borderColorRed(confirmPassword, 'error');
        }

        if (companyInfoHIDDEN.style.display === 'block') {
            if (inputCompanyNumber.value.length > 0 && inputCompanyNumber.value >= 1000 && inputCompanyNumber.value <= 9999) {
                boolean = true;
                borderColorRed(inputCompanyNumber);
            } else {
                boolean = false;
                borderColorRed(inputCompanyNumber, 'error');
            }
        }

        if (boolean){
            validVisiblity.style.display = 'block';
        }else {
            validVisiblity.style.display = 'none';
        }
        function borderColorRed(where, type) {
            if (type === 'error') {
                where.style.borderColor = '#ff0000';
            } else {

                where.style.borderColor = '';
            }
        }
    }




}
