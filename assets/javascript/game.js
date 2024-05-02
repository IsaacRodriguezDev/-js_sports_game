// created variables for all buttons
let resetBtn = document.querySelector('#reset-button')
let teamOneShootBtn = document.querySelector('#teamone-shoot-button')
let teamTwoShootBtn = document.querySelector('#teamtwo-shoot-button')

// created variables for randome numbers and current goals of each team and missed shots as number of resets
let random
let randomNumbers = 1
let teamOneCurrentGoals = 0
let teamtwoCurrentGoals = 0
let teamOneShots = 0
let teamTwoShots = 0
let numberOfResets = 0

// created event listener for team one shoot button
teamOneShootBtn.addEventListener('click',function(){
 random = Math.random()*randomNumbers
 let teamOneShotsTaken = document.querySelector('#teamone-numshots')
 teamOneShots++
 teamOneShotsTaken.textContent = teamOneShots.toString()
 if(random < .5){
    let teamOneGoals= document.querySelector('#teamone-numgoals')
    teamOneCurrentGoals++
    teamOneGoals.textContent = teamOneCurrentGoals.toString()
    
 }
 
 console.log(random)
})

// created event listener for team two shoot button
teamTwoShootBtn.addEventListener('click',function(){
    random = Math.random()*randomNumbers
    let teamTwoShotsTaken = document.querySelector('#teamtwo-numshots')
    teamTwoShots++
    teamTwoShotsTaken.textContent = teamTwoShots.toString()
 if(random <.5){
    let teamTwoGoals= document.querySelector('#teamtwo-numgoals')
    teamtwoCurrentGoals++
    teamTwoGoals.textContent = teamtwoCurrentGoals.toString()
 }

   
 
 console.log(random)
})

// created event listener for reset button 

resetBtn.addEventListener('click',function(){
    // sets everything to 0 and adds how many times the reset button was clicked
 let resets = document.querySelector('#num-resets') 
        numberOfResets++
        resets.textContent = numberOfResets.toString()
       document.querySelector('#teamtwo-numgoals').textContent= '0'
       document.querySelector('#teamtwo-numshots').textContent = '0'
       document.querySelector('#teamone-numshots').textContent = '0'
       document.querySelector('#teamone-numgoals').textContent = '0'
    teamOneCurrentGoals = 0
    teamtwoCurrentGoals = 0
    teamOneShots = 0
    teamTwoShots = 0
})