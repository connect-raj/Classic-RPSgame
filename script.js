const inproc = document.getElementById('button-rock')
const inpsci = document.getElementById('button-scissor')
const inppap = document.getElementById('button-paper')
const comp_choice = document.querySelector('.computer')
const winner = document.querySelector('.winner')
const usersc = document.querySelector('.uscore')
const compsc = document.querySelector('.cscore')
const choices = ['Rock', 'Scissor', 'Paper']
let user_score = 0, comp_score = 0

const getChoice = () => {
  return choices[(Math.floor(Math.random() * choices.length))]
}

const reset = () => {
  user_score = 0
  comp_score = 0
  usersc.innerHTML = '0'
  compsc.innerHTML = '0'
  comp_choice.innerHTML = ""
}
reset()

const game = (index, choice) => {

  winner.innerHTML = ""
  comp_choice.innerHTML = ""
  let user_input = choices[index]
  console.log(index, user_input)
  comp_choice.innerHTML = "Computer Choosed " + choice

  if (user_input == 'Rock') {
    if (choice == 'Scissor') {
      usersc.innerHTML = ""
      user_score++
      usersc.innerHTML = user_score
    }
    else if (choice == 'Paper') {
      compsc.innerHTML = ""
      comp_score++
      compsc.innerHTML = comp_score
    }
    else comp_choice.innerHTML = "SAME CHOICE"
  }
  else if (user_input == 'Paper') {
    if (choice == 'Rock') {
      usersc.innerHTML = ""
      user_score++
      usersc.innerHTML = user_score
    }
    else if (choice == 'Scissor') {
      compsc.innerHTML = ""
      comp_score++
      compsc.innerHTML = comp_score
    }
    else comp_choice.innerHTML = "SAME CHOICE"
  }
  else if (user_input == 'Scissor') {
    if (choice == 'Paper') {
      usersc.innerHTML = ""
      user_score++
      usersc.innerHTML = user_score
    }
    else if (choice == 'Rock') {
      compsc.innerHTML = ""
      comp_score++
      compsc.innerHTML = comp_score
    }
    else comp_choice.innerHTML = "SAME CHOICE"
  }

  //logic to decide winner
  if (user_score == 5) {
    winner.innerHTML = 'User Wins'
    reset()
  }
  else if (comp_score == 5) {
    winner.innerHTML = 'Computer Wins'
    reset()
  }
}

//Calls to generate output
inproc.addEventListener('click', () => {
  game(0, getChoice(choices))
})
inpsci.addEventListener('click', () => {
  game(1, getChoice(choices))
})
inppap.addEventListener('click', () => {
  game(2, getChoice(choices))
})
