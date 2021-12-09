let correctNumber = Math.floor(Math.random() * 15)


let guessed = false
let totalGuesses = 0
let gamerGuess = 0

function evalGuess() {
    totalGuesses += 1
    gamerGuess = document.querySelector('#guess').value

    const feedback = document.querySelector('#feedback')

    if(gamerGuess == correctNumber){
        feedback.innerText = "You Win!!"
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = "Too high, try again"
    } else if (gamerGuess < correctNumber && gamerGuess > 0){
        feedback.innerText = "Too Low, try again"
    } else {
        feedback.innerText = "Please choose a number between 1 and 15 and try again. "
    }
   
    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward () {
    let imagePath = '#'

    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'Images/Blue.jpg'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'Images/serp2.jpg'
            break;
        case 7:
        case 8:
        case 9:
            imagePath = "Images/serp3.jpg"
            

    }

    const awardImage = document.getElementsByTagName('img')[0] ?? document.createElement('img')
    awardImage.setAttribute('src', imagePath)

    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)
}
