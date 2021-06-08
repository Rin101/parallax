const bg1 = document.querySelector('.bg1')
const girl1 = document.querySelector('.girl1')
const rock1 = document.querySelector('.rock1')
const oneH2 = document.querySelector('#one-h2-container')
const oneH2Text = document.querySelector('.one-h2')
const bg2 = document.querySelector('.bg2')
const moon2 = document.querySelector('.moon2')
const twoH2 = document.querySelector('#two-h2-container')
const twoH2Text = document.querySelector('.two-h2')
const mountain2 = document.querySelector('.mountain2')
const road2 = document.querySelector('.road2')


window.addEventListener('scroll', () => {
    let scroll = window.scrollY

    const viewportHeight = document.documentElement.clientHeight
    // oneH2Text.style.fontSize =(100/viewportHeight)*scroll * 0.05 + 20 + "vh"

    // ============================
    oneH2.style.top = scroll * 0.7 + "px"
    bg1.style.top = scroll * 0.9 + "px"
    girl1.style.top = scroll * 0.4 + "px"
    rock1.style.top = -scroll * 0.1 + "px"
    // ============================
    if (scroll > (viewportHeight/100)*130) {
        // bg2.style.top = (scroll - (viewportHeight/100)*130) * 0.9 + "px"
        twoH2.style.top = (scroll - (viewportHeight/100)*130) * 0.7 + "px"
        moon2.style.right= (scroll - (viewportHeight/100)*130) * 0.4 + "px"
        mountain2.style.top = (scroll - (viewportHeight/100)*130) * 0.1 + "px"
        road2.style.top = (scroll - (viewportHeight/100)*130) * -0.1 + "px"
    }
    // ============================
})
