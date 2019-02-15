import React from 'react';
import { storiesOf } from '@storybook/react';
import NewsCard from '../src/components/NewsCard/NewsCard'

const mockItem = {
  id: "football/live/2019/feb/13/tottenham-hotspur-v-borussia-dortmund-champions-league-live",
  type: "liveblog",
  sectionId: "football",
  sectionName: "Football",
  webPublicationDate: "2019-02-13T20:18:19Z",
  webTitle: "Tottenham Hotspur v Borussia Dortmund: Champions League – live!",
  webUrl: "https://www.theguardian.com/football/live/2019/feb/13/tottenham-hotspur-v-borussia-dortmund-champions-league-live",
  apiUrl: "https://content.guardianapis.com/football/live/2019/feb/13/tottenham-hotspur-v-borussia-dortmund-champions-league-live",
  isHosted: false,
  pillarId: "pillar/sport",
  pillarName: "Sport"
}

storiesOf('NewsCard', module)
  .add('with a news', () => (
    <NewsCard news={mockItem}/>
  ))