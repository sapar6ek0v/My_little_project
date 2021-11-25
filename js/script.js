const slider = document.querySelector('#box')
const horLent = document.querySelector('#horizontal-length')
const verLent = document.querySelector('#vertical-length')
const blurRd = document.querySelector('#blur-radius')
const spreadRd = document.querySelector('#spread-radius')
const boxShadow = document.querySelector('#block')
const color = document.querySelector('#color')
const textCont = document.querySelector('.text-content')
const colorBox = document.querySelector('#color-box')
boxShadow.style.boxShadow = '2px 2px 5px 5px #00000'
textCont.innerHTML = `<div class="text">-webkit-box-shadow: 10px 20px 10px 10px #00000</div>
                      <div class="text">-moz-box-shadow: 10px 20px 10px 10px #00000</div>
                      <div class="text">box-shadow: 10px 20px 10px 10px #00000</div> `

slider.addEventListener('input', ()=> {
    boxShadow.style.borderRadius = `${slider.value}px`
})
colorBox.addEventListener('input', ()=> {
    boxShadow.style.background = `${colorBox.value}`
})
horLent.addEventListener('input', () => {
    boxSdw()
})

verLent.addEventListener('input', ()=>{
    boxSdw()
})

blurRd.addEventListener('input', () => {
    boxSdw()
})

spreadRd.addEventListener('input', () => {
    boxSdw()
})

color.addEventListener('input', ()=> {
    boxSdw()
})
const boxSdw = () => {
    boxShadow.style.boxShadow = `${horLent.value}px ${verLent.value}px ${blurRd.value}px ${spreadRd.value}px ${color.value}`
    textCont.innerHTML = `<div class="text">-webkit-box-shadow: ${horLent.value}px ${verLent.value}px ${blurRd.value}px ${spreadRd.value}px ${color.value}</div>
                          <div class="text">-moz-box-shadow: ${horLent.value}px ${verLent.value}px ${blurRd.value}px ${spreadRd.value}px ${color.value}</div>
                          <div class="text">box-shadow: ${horLent.value}px ${verLent.value}px ${blurRd.value}px ${spreadRd.value}px ${color.value}</div>`
}
