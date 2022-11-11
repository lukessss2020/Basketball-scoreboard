let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")
let scoreHome = 0
let scoreAway = 0

function homePlus(points){
    scoreHome += points
    homeScore.textContent = scoreHome
    scoreLeaderEffect()
    
}

function awayPlus(points){
    scoreAway += points
    awayScore.textContent = scoreAway
    scoreLeaderEffect()
}

function resetScore(){
    homeScore.textContent = 0
    awayScore.textContent = 0
    scoreHome = 0
    scoreAway = 0
}

// Challenge Section
// Conditional .leader CSS effct //

function scoreLeaderEffect() {
    if (scoreHome > scoreAway) {
        homeScore.classList.add("leader")
        awayScore.classList.remove("leader")
    } else if (scoreAway > scoreHome) {
        homeScore.classList.remove("leader")
        awayScore.classList.add("leader")
    }
    else {
        homeScore.classList.remove("leader")
        awayScore.classList.remove("leader")
    }
}