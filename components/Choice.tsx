import Image from 'next/image';
import React from 'react';

import { ChoiceOption, Result } from '../types';
import { Button } from './Button';

type ChoiceProps = {
  choice: ChoiceOption
  result?: Result
}

const imageTypeMap = {
  [Result.DRAW]: 'default',
  [Result.WIN]: 'default',
  [Result.LOSE]: 'loose',

}

const Choice: React.FC<ChoiceProps> = ({
  choice,
  result: type = Result.WIN,
}) => {
  const imageType = imageTypeMap[type];

  return (
    <Button>
      <Image
        alt={choice}
        src={`/images/${choice}-${imageType}.png`}
        width={200}
        height={200}
      />
      <p className='first-letter:capitalize'>{choice}</p>
    </Button>
  );
};

export { Choice }