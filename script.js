const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const confirm_password_input = document.getElementById('confirm-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) =>{
    let errors = []

    if(firstname_input){
        errors = getSignipFormErrors(firstname_input.value, email_input.value, password_input.value, confirm_password_input.value)
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignipFormErrors(firstname, email, password, confirmPassword){
    let errors = []
    if(firstname === '' || firstname == null){
        errors.push("Firstname is Required")
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push("Email is Required")
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push("Password is Required")
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 6){
        errors.push('Password must have at least 6 charecters')
        password_input.parentElement.classList.add('incorrect')
    }

    if(password !== confirmPassword){
        errors.push('Incorrect Password')
        password_input.parentElement.classList.add('incorrect')
        confirm_password_input.parentElement.classList.add('incorrect')

    }
    return errors;
}

function getLoginFormErrors(email, password){
    let errors = []
    if(email === '' || email == null){
        errors.push("Email is Required")
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push("Password is Required")
        password_input.parentElement.classList.add('incorrect')
    }
    return errors
}

const allInput = [firstname_input, email_input, password_input, confirm_password_input].filter(input => input != null)

allInput.forEach(input =>{
    input.addEventListener('input',  () =>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})