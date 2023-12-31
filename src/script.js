const button = document.querySelector('#log')
const scope = document.querySelector('#use')
const section = document.querySelector('#Login-section')

button.addEventListener('click', (e) => {
  section.classList.remove('hidden')
})

scope.addEventListener('click', (e) => {
  section.classList.add('hidden')
})

const form = document.querySelector('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('consultando en la base de datos...')
})