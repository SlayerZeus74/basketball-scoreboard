//home point update

let homeEL = document.getElementById("home-point")

let homeScore = 0


function homeOne(){
    homeScore += 1
    homeEL.innerText = homeScore

}

function homeTwo(){
    homeScore += 2
    homeEL.innerText = homeScore

}

function homeThree(){
    homeScore += 3
    homeEL.innerText = homeScore

}

//guest point update
let guestEL = document.getElementById("guest-point")

let guestScore = 0
function guestOne(){
    guestScore += 1
    guestEL.innerText = guestScore

}

function guestTwo(){
    guestScore += 2
    guestEL.innerText = guestScore

}

function guestThree(){
    guestScore += 3
    guestEL.innerText = guestScore

}

function newGame(){
    guestEL.innerText = 0
    homeEL.innerText = 0
    guestScore = 0
    homeScore = 0
}