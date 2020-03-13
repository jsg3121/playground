var controlBar = document.getElementById('control_bar'),
    swipeBox = document.getElementById('swipebox'),
    afterBg = document.getElementById('afterBg'),
    swipeVal = false

controlBar.addEventListener('mousedown', (e) => {
    swipeVal = true
    swipe(e)
})

controlBar.addEventListener('mouseup', (e) => {
    swipeVal = false
})

function swipe(e) {
    swipeBox.addEventListener('mousemove', (e) => {
        if (swipeVal) {
            controlBar.style.left = (e.clientX - (controlBar.offsetWidth / 2)) + 'px'
            afterBg.style.width = (e.clientX - (controlBar.offsetWidth / 2)) + 'px'
        }
    })
}