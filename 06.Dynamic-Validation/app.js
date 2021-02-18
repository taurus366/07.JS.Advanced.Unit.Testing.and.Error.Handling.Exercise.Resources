function validate() {
    let email = document.querySelector('#email');
    let listener = document.querySelector('body');
    listener.addEventListener('change', (ev) => {
        let regex = new RegExp('^[a-zA-Z]+@[a-z]+\\.[a-z]{1,}$')
        if (email.value.length > 0) {
            if (!regex.test(email.value)) {
                email.className = 'error';
            } else {
                email.className = '';
            }
        } else {
            email.className = '';
        }


    })


}