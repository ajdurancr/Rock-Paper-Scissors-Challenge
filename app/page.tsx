import React from 'react';

import { GamePlay } from '../components/GamePlay';
import { Page as GenericPage } from '../components/Page';

const Page = () => (
  <GenericPage title='Ready to Rock-Paper-Scissors?'>      
    <GamePlay />
  </GenericPage>
);

export default Page;
