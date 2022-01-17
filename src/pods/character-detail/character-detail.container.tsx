import useSWR from 'swr';
import { getCharacterById } from './api';
import { Character } from './character-detail.vm';
import { characterFromApiToVM } from './character.detail.mapper';
import { CharacterDetail } from './character-detail.component';
interface Props {
  id: string;
}
const CharacterDetailContainer: React.FC<Props> = ({ id }) => {
  const URL = 'https://rickandmortyapi.com/api/character/' + id;
  const fetcher = async (url: string): Promise<Character> => {
    const resp = await getCharacterById(url);
    const character = characterFromApiToVM(resp);
    return character;
  };
  const { data: character, error } = useSWR(URL, fetcher);
  if (error) return <h1>There was an error fetching characters</h1>;
  if (!character) {
    return <h1>Loading...</h1>;
  }
  return <CharacterDetail character={character} />;
};

export { CharacterDetailContainer };
