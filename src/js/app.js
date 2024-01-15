import A11yDialog from 'a11y-dialog'
import swiper from "../js/modules/_slider.js"

const container = document.querySelector('#dialog-window')
const dialog = new A11yDialog(container)

const init = () => {
    swiper()
    
}
init()