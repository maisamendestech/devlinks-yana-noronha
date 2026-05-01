function toggleMode() {
    const html = document.documentElement
     html.classList.toggle('light')

 const img= document.querySelector("#profile img")
 const logo= document.querySelector("#logo img")

 
   if(html.classList.contains('light')){
  img.setAttribute('src', './css/assets/yana-light.jpeg')
  logo.setAttribute('src', './css/assets/logo_transparentept.png')
   } else{
  img.setAttribute('src', './css/assets/yana-dark.jpeg')
  logo.setAttribute('src', './css/assets/logo_transparente.png')
   }
}