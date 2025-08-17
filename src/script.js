const hamburguerEl = document.querySelector('#hamburguer')
const hamburguerContentEl = document.querySelector('#hamburguer-content')

hamburguerEl.addEventListener('click', () => {
  hamburguerContentEl.classList.toggle('active')
  hamburguerContentEl.classList.toggle('no-active')
})

const habilityDescEl = document.querySelector('#hability-desc')
const habilitiesEls = document.querySelectorAll('.hability')
const habilitiesBlockEl = document.querySelector('#habilities-block')

const habilitiesTexts = [
  'Linguagem de marcação usada para criar o conteúdo de um site, como textos, imagens, vídeos, listas e etc. Meu possível nível: Iniciante-Intermediário.',
  'Linguagem de estilo para o HTML, como o próprio nome diz, dá uma aparência melhor ao conteúdo. Meu possível nível: Iniciante-Intermediário.',
  'Linguagem de programação para dar a interatividade em páginas da web, como cliques em botões. Meu possível nível: Iniciante.',
  'Permite "viajar" entre versões do código, sendo ela a melhor maneira de fazer alterações em sites. Meu possível nível: Iniciante.',
  'Framework JavaScript progressivo que serve para criar interfaces de usuário e aplicações web de forma eficiente. Meu possível nível: Zero conhecimento.',
]

const defaultText = 'Passe o mouse sobre uma habilidade para ver a descrição.'

habilityDescEl.textContent = defaultText

habilitiesEls.forEach((el, index) => {
  el.addEventListener('mouseover', () => {
    habilityDescEl.textContent = habilitiesTexts[index]
  })
})

habilitiesBlockEl.addEventListener('mouseleave', () => {
  habilityDescEl.textContent = defaultText
})

const aosEls = document.querySelectorAll('[data-aos]')
const aosElsTime = 1000

aosEls.forEach((el) => {
  el.setAttribute('data-aos-duration', aosElsTime)
})

AOS.init()
