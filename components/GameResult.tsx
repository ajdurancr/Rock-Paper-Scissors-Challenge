import Link from 'next/link';
import React from 'react';

import { ChoiceOption, Result } from '../types';
import { Button } from './Button';
import { Choice } from './Choice';

type GameResultProps = {
  userChoice: ChoiceOption
  aiChoice: ChoiceOption
  result: Result
}

type SelectionProps = {
  choice: ChoiceOption
  result: Result
  description: string
}


const aiResultTransform = {
  [Result.DRAW]: Result.DRAW,
  [Result.WIN]: Result.LOSE,
  [Result.LOSE]: Result.WIN,
}


const Selection: React.FC<SelectionProps> = ({ choice, result, description }) => (
  <div className='text-center p-4'>
    <Choice choice={choice} result={result} />
    <p className='text-xl italic mt-3'>{description}</p>
  </div>
)

const GameResult: React.FC<GameResultProps> = ({ userChoice, aiChoice, result }) => (
    <div className='w-full flex justify-evenly flex-wrap'>
      <Selection
        choice={userChoice}
        result={result}
        description='You'
      ></Selection>
      <Selection
        choice={aiChoice}
        result={aiResultTransform[result]}
        description='AI'
      ></Selection>
    </div>
);

export { GameResult }
