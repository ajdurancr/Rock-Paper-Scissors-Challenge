import Link from 'next/link';
import React from 'react';
import { ChoiceOption } from '../types';

import { Choice } from './Choice';

const options = [ChoiceOption.ROCK, ChoiceOption.PAPER, ChoiceOption.SCISSORS]

const GamePlay = () => (
  <div className='flex flex-wrap justify-around'>
    {/* <h2 className='text-2xl'>Choose 1 option:</h2> */}
    {/* <div className=''> */}
      {options.map((option) => (
        <Link key={option} className='p-4' href={`/play/${option}`} prefetch={false}>
          <Choice choice={option} />
        </Link>
      ))}
    {/* </div> */}
  </div>
);

export { GamePlay }
