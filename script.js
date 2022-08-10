const button = document.querySelector('.btn')
const toasts = document.querySelector('#toasts')

const messages = ['Call Somebody', 'Send E-mail', 'Visit Family', 'Refresh Buy List', 'Study', 'Dinners Time', 'Coffe Brake', 'Listen Music', 'Back Home']

button.addEventListener('click', createNotification)

function createNotification () {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  
  notif.innerText = getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage () {
  return messages[Math.floor(Math.random() * messages.length)]
}