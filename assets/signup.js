// Select the elements
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let mobileNumber = document.getElementById('mobileNumber');
let password = document.getElementById('password');
let SignUpButton = document.getElementById('SignUpButton');
let loginButton = document.getElementById('loginButton');
let forText = document.getElementById('text')
let loginPasswordInput = document.getElementById('loginPasswordInput')
let LoginEmailInput = document.getElementById('LoginEmailInput')
SignUpButton.addEventListener('click', function (event) {
if (userName.value == '' || userEmail.value == '' || mobileNumber.value == '' || password.value == '') {
    event.preventDefault()
    forText.innerText = 'Please fill in this form'
}else{
        localStorage.setItem('User Name', userName.value);
        localStorage.setItem('User Email', userEmail.value);
        localStorage.setItem('Mobile Number', mobileNumber.value);
        localStorage.setItem('Password', password.value);
        userEmail.value = '';
        userName.value = '';
        mobileNumber.value = '';
        password.value = '';
        event.preventDefault();
        window.location.href= 'assets/login.html'
        // window.open('assets/login.html');
        // window.location.assign('assets/login.html');
        console.log('Sign up successful');
    }
});


