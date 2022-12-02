import 'server-only';

import { ApiResponse, ChoiceOption } from '../types';

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

export { fetchGameResult };
