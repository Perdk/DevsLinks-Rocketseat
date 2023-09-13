// Muda do modo claro/escuro
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
 
    // se estiver light mode, adicionar a imagem light
  img.setAttribute("src", "./imagens/assets/avatar-light.png")   
} else {
  
  // se estiver sem light mode, manter a imagem
  img.setAttribute("src", "./imagens/assets/avatar.png")
}
}
