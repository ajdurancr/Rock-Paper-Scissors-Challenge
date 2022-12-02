import React from 'react';

import { GamePlay } from '../components/GamePlay';
import { Page as GenericPage } from '../components/Page';

const Page = () => (
  <GenericPage>
    <h1
      className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-4xl tracking-tight text-transparent pt-4 pb-4 mr-4 ml-4 xs:mr-auto xs:ml-auto '
    >
      <p className='text-3xl'>Ready to</p>
      Rock-Paper-Scissors?
    </h1>
    <GamePlay />
  </GenericPage>
);

export default Page;
