import React from 'react';

import ReaderCarousel from '../components/reader_carousel';
import ReaderCardTeamMember from '../components/reader_card_team_member';

export default () =>
  <ReaderCarousel>
    <ReaderCardTeamMember name="Charles Clay" />
    <ReaderCardTeamMember name="Kyle Juszczyk" />
    <ReaderCardTeamMember name="Marcel Reece" />
  </ReaderCarousel>
;
