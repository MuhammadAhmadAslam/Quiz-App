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
loginButton.addEventListener('click', (event) => {
    let storedEmail = localStorage.getItem('User Email');
    let storedPassword = localStorage.getItem('Password');
    if (storedEmail === LoginEmailInput.value && storedPassword === loginPasswordInput.value) {
        event.preventDefault();
        alert('Login successful');
        window.location.href = 'quiz.html'
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Are Regiesterd Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        event.preventDefault();
        console.log('Login failed');
        forText.innerText = 'Please fill in this form'
    }
});


// SignUpButton.addEventListener('click', function (event) {
// if (userName.value == '' || userEmail.value == '' || mobileNumber.value == '' || password.value == '') {
//     forText.innerText = 'Please fill in this form'
// }else{
//         localStorage.setItem('User Name', userName.value);
//         localStorage.setItem('User Email', userEmail.value);
//         localStorage.setItem('Mobile Number', mobileNumber.value);
//         localStorage.setItem('Password', password.value);
//         userEmail.value = '';
//         userName.value = '';
//         mobileNumber.value = '';
//         password.value = '';
//         event.preventDefault();
//         window.open('assets/login.html');
//         // window.location.assign('assets/login.html');
//         console.log('Sign up successful');
//     }
// });

// Login event listener

console.log(localStorage.getItem('User Name'));











// let userName = document.getElementById('userName')
// let userEmail = document.getElementById('userEmail')
// let mobileNumber = document.getElementById('mobileNumber')
// let password = document.getElementById('password')
// let SignUpButton = document.getElementById('SignUpButton')


// SignUpButton.addEventListener('click', function (event) {
//     event.preventDefault()
//     userEmail.value = ''
//     userName.value = ''
//     mobileNumber.value = ''
//     password.value = ''
//     window.open('assets/login.html');
//     // window.location.assign('assets/login.html')
//     console.log(true)
// })


// let loginButton = document.getElementById('loginButton')
// window.preventDefault()
// console.log(true);
// loginButton.addEventListener('click', (event) => {
//     if (StoredEmail == userEmail.value && StoredPassword == password) {
//             event.preventDefault()
//             console.log(true);
//         }else{
//             console.log(true);
//             event.preventDefault()
//         }
// })

// console.log(localStorage.getItem('User Name'));


// document.getElementById('logout').addEventListener('click', (event) => {
//     event.preventDefault()
//     window.open('assets/login.html' , 'self');
//     console.log(true);
// })


// let userName = document.getElementById('userName')
// let userEmail = document.getElementById('userEmail')
// let mobileNumber = document.getElementById('mobileNumber')
// let password = document.getElementById('password')
// let SignUpButton = document.getElementById('SignUpButton')


// SignUpButton.addEventListener('click', function (event) {
//     let StoredUserName = localStorage.setItem('User Name' , userName.value)
//     let StoredEmail = localStorage.setItem('User Email' , userEmail.value)
//     let StoredMobileNumber = localStorage.setItem('Mobile Number' , mobileNumber.value)
//     let StoredPassword = localStorage.setItem('Password' , password.value)
//     event.preventDefault()
//     userEmail.value = ''
//     userName.value = ''
//     mobileNumber.value = ''
//     password.value = ''
//     window.open('assets/login.html');
//     // window.location.assign('assets/login.html')
//     console.log(true)
// })


// let loginButton = document.getElementById('loginButton')
// window.preventDefault()
// console.log(true);
// loginButton.addEventListener('click', (event) => {
//     if (StoredEmail == userEmail.value && StoredPassword == password) {
//             event.preventDefault()
//             console.log(true);
//         }else{
//             console.log(true);
//             event.preventDefault()
//         }
// })

// console.log(localStorage.getItem('User Name'));
