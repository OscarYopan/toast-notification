const button = document.querySelector('.btn')
const toasts = document.querySelector('#toasts')

const messages = ['Call Somebody', 'Send E-mail', 'Visit Family', 'Refresh Buy List', 'Study', 'Dinners Time', 'Coffe Brake', 'Listen Music', 'Back Home']

const types = ['work', 'personal', 'study', 'hobby']

button.addEventListener('click', () => createNotification())

function createNotification (message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}