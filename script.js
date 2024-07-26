const form = document.getElementById('form')
const body = document.querySelector('body')
const errorModal = document.getElementById('modal')
const transparency = document.getElementById('transparency')

errorModal.style.display = 'none'
transparency.style.display = 'none'

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission   


    const email = form.elements['email']
    const password = form.elements['password']

    if (email.value == '' || password.value == '' || email.value == undefined || password.value == undefined) {
        displayErrorModal()
    } else {
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000)
    }
})

errorModal.addEventListener('click', (event) => {
    if (errorModal.style.display == 'block') {
        closeErrorModal()
    }
})

function displayErrorModal() {
    transparency.style.display = 'block'
    errorModal.style.display = 'block'

}

function closeErrorModal() {
    transparency.style.display = 'none'
    errorModal.style.display = 'none'
    location.reload()
}