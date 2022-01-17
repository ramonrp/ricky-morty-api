import * as React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetailContainer } from 'pods/character-detail';
const CharacterDetail: React.FC = () => {
  const { id } = useParams();
  return <CharacterDetailContainer id={id} />;
};

export { CharacterDetail };
