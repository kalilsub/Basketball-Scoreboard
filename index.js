const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0


function homeOne() { 
    homeCount += 1
    homeScore.innerHTML = homeCount
}

function homeTwo() {
    homeCount += 2
    homeScore.innerHTML = homeCount
}

function homeThree() {
    homeCount += 3
    homeScore.innerHTML = homeCount
}




function guestOne() {    
    guestCount += 1
    guestScore.innerHTML = guestCount
}

function guestTwo() {
    guestCount += 2
    guestScore.innerHTML = guestCount 
}

function guestThree() {
    guestCount += 3
    guestScore.innerHTML = guestCount 
}