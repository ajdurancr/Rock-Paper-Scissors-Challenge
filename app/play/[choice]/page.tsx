import React, { use } from 'react'

import { Page as GenericPage } from '../../../components/Page';
import { ApiResponse, ChoiceOption } from '../../../types';
import { GameResult } from '../../../components/GameResult'
import Link from 'next/link';
import { Button } from '../../../components/Button';

const RPS_API_KEY = process.env.RPS_API_KEY;
const RPS_API_HOST = process.env.RPS_API_HOST;

const fetchGameResult = async (userChoice: ChoiceOption): Promise<ApiResponse> => {
  const url = `https://${process.env.RPS_API_HOST}/?choice=${userChoice}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RPS_API_KEY as string,
      'X-RapidAPI-Host': RPS_API_HOST as string
    }
  })
    .then(res => res.json())
    .catch(err => console.error('error:' + err));

  return response;
}

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