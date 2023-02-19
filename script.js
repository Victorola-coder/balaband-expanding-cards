const cards = document.querySelectorAll('.box')


cards.forEach((card) => {
    card.addEventListener('click', buttonClicked)
    function buttonClicked() {
        removeActive()
        card.classList.add('active')
    }
})

function removeActive() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}


