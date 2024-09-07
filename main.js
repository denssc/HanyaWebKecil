const video = document.querySelector('.video-player')
const button = document.querySelectorAll('.button-card button')

button.forEach((element) => {
    element.addEventListener('click', function(e) {
        const url = e.target.getAttribute('data-url')
        video.setAttribute('src', url)
        video.play()
    })
})