let x = document.getElementById("inp")
let y = document.getElementById("sub")
let hola = document.getElementById("hola")
let body = document.body
hola.style.display = 'none'
x.style.cssText = 'display:block; font-size : 30px; text-align : center'
y.style.cssText = 'font-size : 30px; display: none'
body.style.backgroundColor = 'Black'

x.onclick = function() {
    x.style.backgroundColor = 'yellow'
    setTimeout(function () {

      y.style.display = 'block'
  }, 2000)
}

y.onclick = function() {
   let xx = x.value
   window.alert(`اهلا ${xx} عاوز أقولك إني بحبك أوي 
   ومنفسيش أبدا تكوني زعلانة
   هفضل جمبك لآخر العمر وعايزك تكملي عشان خاطر ربنا وعشان خاطر نفسك
   إوعديني إنك تكملي عشان أنا أأقدر أكمل ` , "أوعدك")
   alert("بحبك")

   x.remove()
   y.remove()
  hola.style.display = "block"
  hola.style.cssText= 'padding-left : 50px; font-weight : bold; font-size: 50px'
}