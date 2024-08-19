let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let homeIncrement = 0
let guestIncrement = 0

function add1Home() {
    homeIncrement += 1
    homeScore.textContent = homeIncrement
}
function add2Home() {
    homeIncrement += 2
    homeScore.textContent = homeIncrement
}
function add3Home() {
    homeIncrement += 3
    homeScore.textContent = homeIncrement
}
function add1Guest() {
    guestIncrement += 1
    guestScore.textContent = guestIncrement
}
function add2Guest() {
    guestIncrement += 2
    guestScore.textContent = guestIncrement
}
function add3Guest() {
    guestIncrement += 3
    guestScore.textContent = guestIncrement
}

function reset() {
    homeIncrement = 0
    guestIncrement = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}