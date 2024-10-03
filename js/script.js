const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const subject = document.getElementById('subject')
let messageValidade = document.getElementById('status-form-message')

form.addEventListener('submit', event => {
    event.preventDefault()
    valiteForm()
})

function valiteForm () {
    const firstNameValue = firstName.value.trim()
    const subjectValue = subject.value.trim()

    if (firstNameValue === '') {
        validateField('Preencha seu nome!')
        return

    }

    if (subjectValue === '') {
        validateField('Preencha alguma mensagem!')
        return
    }

    messageValidade.innerText = 'Mensagem enviada com sucesso!'
    messageValidade.className = 'status-form-message-sucess'
    return
}

function validateField(message) {

    messageValidade.innerText = message

    messageValidade.className = 'status-form-message-erro'
}

