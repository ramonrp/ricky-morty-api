import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { getCharacters } from './api/api';
import { CharacterListFromApiToVm } from './character-list.mapper';
import { Character } from './character-list.vm';

const URL = 'https://rickandmortyapi.com/api/character';
const fetcher = async (url: string): Promise<Character[]> => {
  const result = await getCharacters(url);
  const charactersApi = result.results;
  const characterVM = CharacterListFromApiToVm(charactersApi);
  return characterVM;
};
const CharacterListContainer: React.FC = () => {
  const { data: characters, error } = useSWR(URL, fetcher);
  if (error) return <h1>There was an error fetching characters</h1>;
  if (!characters) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul>
      {characters.map(character => (
        <Link to={`/${character.id}`} key={character.id}>
          <li>{character.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export { CharacterListContainer };
