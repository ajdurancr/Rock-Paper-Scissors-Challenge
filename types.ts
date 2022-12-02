
export enum Result {
  DRAW = 'Draw',
  WIN = 'You Win' ,
  LOSE = 'You Lose',
}

export type GameChoice = {
  name: ChoiceOption
  beats: ChoiceOption
}

export type ApiResponse = {
  user: GameChoice
  ai: GameChoice
  result: Result
}

export enum ChoiceOption {
  ROCK = 'rock',
  SCISSORS = 'scissors',
  PAPER = 'paper',
}