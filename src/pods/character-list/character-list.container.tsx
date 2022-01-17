import useSWR from 'swr';
import { getCharacters } from './api/api';
import { CharacterListFromApiToVm } from './character-list.mapper';
import { Character } from './character-list.vm';

const URL = 'https://rickandmortyapi.com/api/character';

const CharacterListContainer: React.FC = () => {
  const fetcher = async (url: string): Promise<Character[]> => {
    const result = await getCharacters(url);
    const charactersApi = result.results;
    const characterVM = CharacterListFromApiToVm(charactersApi);
    return characterVM;
  };
  const { data, error } = useSWR(URL, fetcher);
  console.log(data);
  return <ul></ul>;
};

export { CharacterListContainer };
