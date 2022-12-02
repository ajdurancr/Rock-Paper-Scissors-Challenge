import React, { use } from 'react'
import Link from 'next/link';

import { Page as GenericPage } from '../../../components/Page';
import { ChoiceOption } from '../../../types';
import { GameResult } from '../../../components/GameResult'
import { Button } from '../../../components/Button';
import { fetchGameResult } from '../../../lib/game';

const Page: React.FC<{ params: { choice: ChoiceOption } }> = ({ params }) => {
  const userChoice = params.choice;
  const { ai, result } = use(fetchGameResult(userChoice));

  return (
    <GenericPage title={result}>   
      <GameResult result={result} userChoice={userChoice} aiChoice={ai.name} />
      <Link className='pt-6' href='/'>
        <Button>Play again</Button>
    </Link>
    </GenericPage>
  )
}

export default Page