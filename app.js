const playTimerButton = document.querySelector('.play-timer-button')
const stopTimerButton = document.querySelector('.stop-timer-button')
const resetTimerButton = document.querySelector('.reset-timer-button')

const spinnerContainer = document.querySelector('.spinner')

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const hundredthSeconds = document.querySelector('.hundredth-seconds')


///////////////////////////////////////////////////////////////////////////

  let hoursCount = 0
  let minutesCount = 0
  let secondsCount = 0
  let hundredthsCount = 0

  let hoursID
  let minutesID
  let secondsID
  let hundredthSecondID

///////////////////////////////////////////////////////////////////////////

const hoursPlay = () => {
  hoursID = setInterval(() => {
    hoursCount++
    const formatted = String(hoursCount).padStart(2, '0')
    hours.innerHTML = `<p>${formatted}</p>`
  }, 3600000)
}

const minutesPlay = () => {
  minutesID = setInterval(() => {
    minutesCount++
    const formatted = String(minutesCount % 60).padStart(2, '0')
    minutes.innerHTML = `<p>${formatted}</p>`
  }, 60000)
}

const secondsPlay = () => {
  secondsID = setInterval(() => {
    secondsCount++
    const formatted = String(secondsCount % 60).padStart(2, '0')
    seconds.innerHTML = `<p>${formatted}</p>`
  }, 1000)
}

const hundredthSecondsPlay = () => {
  hundredthSecondID = setInterval(() => {
      hundredthsCount++
      const formatted = String(hundredthsCount % 10).padStart(2, '0')
      hundredthSeconds.innerHTML = `<p>${formatted}</p>`
    }, 100)
}


////////////////////////////////////////////////////////////////////////////////


//click do botão play
playTimerButton.addEventListener('click', () => {

  playTimerButton.style.display = 'none'
  stopTimerButton.style.display = 'flex'

  stopTimerButton.classList.add('active')
  playTimerButton.classList.remove('active')

  hoursPlay()
  minutesPlay()
  secondsPlay()
  hundredthSecondsPlay()

  spinnerContainer.classList.add('running')

})

//click do botão stop
stopTimerButton.addEventListener('click', () => {
  stopTimerButton.style.display = 'none'
  playTimerButton.style.display = 'flex'

  playTimerButton.classList.remove('active')
  stopTimerButton.classList.add('active')

  clearInterval(hoursID)
  clearInterval(minutesID)
  clearInterval(secondsID)
  clearInterval(hundredthSecondID)

  spinnerContainer.classList.remove('running')
  
})

//click do botão reset
resetTimerButton.addEventListener('click', () => {
  clearInterval(hoursID)
  clearInterval(minutesID)
  clearInterval(secondsID)
  clearInterval(hundredthSecondID)

  hoursCount = 0
  minutesCount = 0
  secondsCount = 0
  hundredthsCount = 0

  hours.innerHTML = `<p>00</p>`
  minutes.innerHTML = `<p>00</p>`
  seconds.innerHTML = `<p>00</p>`
  hundredthSeconds.innerHTML = `<p>00</p>`

  stopTimerButton.style.display = 'none'
  playTimerButton.style.display = 'flex'

  playTimerButton.classList.remove('active')
  stopTimerButton.classList.remove('active')

  spinnerContainer.classList.remove('running')
})
