const hamburguerEl = document.querySelector('#hamburguer')
const hamburguerContentEl = document.querySelector('#hamburguer-content')

hamburguerEl.addEventListener('click', () => {
  hamburguerContentEl.classList.toggle('active')
  hamburguerContentEl.classList.toggle('no-active')
})
