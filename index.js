let score = 0
let cards = []
let message = ""
let hasBlackjack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let displaySum = document.getElementById("sum")
let cardsEl = document.getElementById("cards-el")

function render() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }
    displaySum.textContent = "Score: " + score
    if (score <= 20) {
        message = "Would you like to draw another card?"
    } else if (score === 21) {
        message = "You won! Great job!"
        hasBlackjack = true
    } else {
        message = "You busted, sorry."
        isAlive = false
    }
    console.log(message)
    messageEl.textContent = message
}

function start() {
    isAlive = true
    let firstCard = randCard()
    let secondCard = randCard()
    cards.push(firstCard)
    cards.push(secondCard)
    score = firstCard + secondCard
    render()
}

function randCard() {
    let num = Math.floor(Math.random() * 13 + 1)
    if (num > 10) {
        return 10
    } else if (num === 1) {
        return 11
    } else {
        return num
    }
}

function drawCard() {
    if (isAlive === true && hasBlackjack === false) {
        var card = randCard()
        cards.push(card)
        score += card
    }


    render()
}


