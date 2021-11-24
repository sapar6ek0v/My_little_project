const slider = document.querySelector('#box')
const horLent = document.querySelector('#horizontal-length')
const verLent = document.querySelector('#vertical-length')
const blurRd = document.querySelector('#blur-radius')
const spreadRd = document.querySelector('#spread-radius')
const boxShadow = document.querySelector('#block')
const color = document.querySelector('#color')
const textCont = document.querySelector('.text-content')
const colorBox = document.querySelector('#color-box')
boxShadow.style.boxShadow = '2px 2px 5px 5px black'

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
    textCont.textContent = `-webkit-box-shadow: ${horLent.value}px ${verLent.value}px ${blurRd.value}px ${spreadRd.value}px ${color.value}\n
                            -moz-box-shadow: ${horLent.value}px ${verLent.value}px ${blurRd.value}px ${spreadRd.value}px ${color.value}\n
                            box-shadow: ${horLent.value}px ${verLent.value}px ${blurRd.value}px ${spreadRd.value}px ${color.value}`
}
