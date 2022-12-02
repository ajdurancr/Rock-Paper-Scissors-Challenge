// 'use client'

import React, { useCallback, useState } from 'react';

import { ApiResponse, ChoiceOption, Result } from '../types';

import { GamePlay } from './GamePlay';
import { GameResult } from './GameResult';

type GameProps = {
}

const Game: React.FC<GameProps> = () => {
  // const [result, setResult] = useState<Result | undefined>();
  // const [userChoice, setUserChoice] = useState<ChoiceOption | undefined>();
  // const [aiChoice, setAiChoice] = useState<ChoiceOption | undefined>();

  // const onChooseOption = useCallback(async (option: ChoiceOption) => {
  //   setUserChoice(option);

  //   const body = { choice: option as ChoiceOption }

  //   const { ai, user, result: resultValue }: ApiResponse = await fetch('/api/play', {
  //     method: 'POST',
  //     body: JSON.stringify(body),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   }).then(res =>res.json());
    
  //   setAiChoice(ai.name);
  //   setResult(resultValue);
  // },  []);

  return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent pt-4 pb-4'>Ready to Rock-Paper-Scissors?</h1>
      {/* {result
        ? (
          <GameResult
            result={result}
            userChoice={userChoice as ChoiceOption}
            aiChoice={aiChoice as ChoiceOption}
          />
        )
        : <GamePlay onChooseOption={onChooseOption} />
      } */}
      <GamePlay />
    </div>
  );
};


export { Game }
