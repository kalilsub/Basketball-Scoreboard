const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0


function homeBasket(score){
    homeCount +=score
    homeScore.innerHTML = homeCount

    if(homeCount>guestCount){
        homeScore.classList.add("glowing-border")
        guestScore.classList.remove("glowing-border")
    }else if(homeCount<guestCount){
        homeScore.classList.remove("glowing-border")
        guestScore.classList.add("glowing-border")
    }else if(homeCount === guestCount){
        homeScore.classList.remove("glowing-border")
        guestScore.classList.remove("glowing-border")
    }
}

function guestBasket(score){
    guestCount += score
    guestScore.innerHTML = guestCount

    if(homeCount>guestCount){
        homeScore.classList.add("glowing-border")
        guestScore.classList.remove("glowing-border")
    }else if(homeCount<guestCount){
        homeScore.classList.remove("glowing-border")
        guestScore.classList.add("glowing-border")
    }else if(homeCount === guestCount){
        homeScore.classList.remove("glowing-border")
        guestScore.classList.remove("glowing-border")
    }
}


document.getElementById("new-game-btn").addEventListener("click",()=>{
    homeCount = 0
    guestCount = 0
    homeScore.innerHTML = homeCount
    guestScore.innerHTML = guestCount
    homeScore.classList.remove("glowing-border")
    guestScore.classList.remove("glowing-border")
})

