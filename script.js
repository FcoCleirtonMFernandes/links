function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
 // ou pode fazer assim com o toggle.
 // html.classList.toggle('light')

 // pegar a tag img
 const img = document.querySelector('#profile img')

  // substituir a imagem
 if (html.classList.contains('light')) {
  // se tiver a light mode, add a imagem light
  img.setAttribute('src', 'https://github.com/FcoCleirtonMFernandes.png')
} else {
  // se tiver sem light mode, manter a imagem light
  img.setAttribute('src', 'https://github.com/FcoCleirtonMFernandes.png')
}

}