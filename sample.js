const form = document.querySelector('#form')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const psd = document.querySelector('#password')
const cpsd = document.querySelector('#cpassword')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validateInp() //User defined function
})
function validateInp(){
    let nameval = username.value.trim()
    let emailVal = email.value.trim()
    let psdVal = psd.value.trim() 
    let cpsdVal = cpsd.value.trim() 
    if(nameval===''){
        setErr(username,'username cannot be empty')
    }else{
        setSuccess(username)
    }

    if(emailVal===''){
        setErr(email,'mail cannot be empty')
    }else if(!validateEmail(emailVal)){
        setErr(email, 'Pls enter the valid mail')
    }else{
        setSuccess(email)
    }

    if(psdVal===''){
        setErr(psd, 'Password cannot be empty')
    }else if(psdVal.length<8){
        setErr(psd, 'Password must be at least 8 characters')
    }else{
        setSuccess(psd)
    }

    if(cpsdVal===''){
        setErr(cpsd, 'Confirm password cannot be empty')
    }else if(cpsdVal!==psdVal){
        setErr(cpsd, 'Confirm password does not matches a password')
    }else{
        setSuccess(cpsd)
    }
}
function setErr(element, message){
    const inpGroup = element.parentElement;
    const errElement = inpGroup.querySelector('.error')
    inpGroup.querySelector('input').style.border = '2px solid red'
    errElement.innerText = message
    inpGroup.classList.add('error')
    inpGroup.classList.remove('success')
}
function setSuccess(element){
    const inpGroup = element.parentElement;
    const errElement = inpGroup.querySelector('.error')
    errElement.innerText = ''
    // inpGroup.classList.add('success')
    inpGroup.querySelector('input').style.border = '2px solid green'
    inpGroup.classList.remove('error')
}
function validateEmail(email){
    return String(email).toLowerCase()
    .match('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
}