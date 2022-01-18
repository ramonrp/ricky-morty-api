import useSWR from 'swr';
import { getCharacterById } from './api';
import { Character } from './character-detail.vm';
import { characterFromApiToVM } from './character.detail.mapper';
import { CharacterDetail } from './character-detail.component';
import { useCharacterToVM } from './hooks/useCharacterToVm';
interface Props {
  id: string;
}
const CharacterDetailContainer: React.FC<Props> = ({ id }) => {
  const { data: character, error } = useCharacterToVM(id);
  if (error) return <h1>There was an error fetching characters</h1>;
  if (!character) {
    return <h1>Loading...</h1>;
  }
  return <CharacterDetail character={character} />;
};

export { CharacterDetailContainer };
